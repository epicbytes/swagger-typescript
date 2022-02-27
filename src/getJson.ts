import Axios from "axios";
import yaml from "js-yaml";
import fs from "fs";
import { SwaggerJson } from "./types";

async function getJson(url: string): Promise<SwaggerJson> {
  let content: SwaggerJson = {
    paths: {},
    info: {
      title: "",
      version: "",
    },
  };
  if (url.startsWith("http://") || url.startsWith("https://")) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const { data } = await Axios.get(url);
    content = typeof data === "object" ? data : yaml.load(data);
  } else {
    const data = fs.readFileSync(url, "utf8");
    content =
      typeof data === "object" ? data : (yaml.load(data) as SwaggerJson);
  }
  return content;
}

export { getJson };
