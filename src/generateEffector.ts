import {
  getTsType,
  isAscending,
  getDefineParam,
  getParamString,
  toPascalCase,
  getSchemaName,
  isMatchWholeWord,
} from "./utils";
import { FUNCS_BEGINING } from "./strings";
import { ApiAST, Config, TypeAST } from "./types";

function generateEffector(
  apis: ApiAST[],
  types: TypeAST[],
  config: Config,
): string {
  try {
    apis = apis.sort(({ serviceName }, { serviceName: _serviceName }) =>
      isAscending(serviceName, _serviceName),
    );
    const apisWithStores = apis.filter((api) =>
      api.summary?.includes("*GENERATE_FRONT_STORE*"),
    );
    let code = FUNCS_BEGINING;

    const funcsCode = apisWithStores.reduce(
      (
        prev,
        {
          serviceName,
          responses,
          isQueryParamsNullable,
          queryParamsTypeName,
          pathParams,
        },
      ) => {
        const pathParameters = pathParams
          .map(({ name, required, schema, description }) =>
            getDefineParam(name, required, schema, description),
          )
          .join(",");

        const requestParams = [];
        if (pathParameters.length > 0) {
          requestParams.push(pathParameters);
        }
        if (queryParamsTypeName) {
          requestParams.push(queryParamsTypeName);
        }
        return (
          prev +
          `export const $${serviceName} = createStore<${
            responses ? getTsType(responses) : "any"
          }>();
export const start${toPascalCase(
            serviceName,
          )} = createEvent<${requestParams.join(",")}>();
export const ${serviceName}Fx = createEffect(${serviceName});
forward({
  from: start${toPascalCase(serviceName)},
  to: ${serviceName}Fx
})
forward({
  from: ${serviceName}Fx.doneData.map(payload => payload.data),
  to: $${serviceName}
})
`
        );
      },
      "",
    );

    const mappedTypes = types
      .map((tp) => {
        const name = getSchemaName(tp.name);
        if (!isMatchWholeWord(funcsCode, name)) {
          return false;
        }
        return name;
      })
      .filter(Boolean);
    code += `import {${mappedTypes.join(", ")}} from "./types"\n`;

    const mappedRoutes = apisWithStores.map((rt) => {
      return rt.serviceName;
    });

    code += `import {${mappedRoutes.join(", ")}} from "./services"\n\n`;

    code += funcsCode;

    return code;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export { generateEffector };
