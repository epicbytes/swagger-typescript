import { generator } from "./generator";
const swaggerJson = {
  basePath: "/api/v1",
  consumes: ["application/json"],
  definitions: {
    AddExistsCardInput: {
      properties: {
        card_holder: {
          description: "in: body",
          type: "string",
          "x-go-name": "CardHolder",
        },
        card_pan: {
          description: "in: body",
          type: "string",
          "x-go-name": "CardPan",
        },
        expiration_date: {
          description: "in: body",
          type: "string",
          "x-go-name": "ExpirationDate",
        },
      },
      required: ["card_pan", "expiration_date"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    AddExistsCardParamsCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/addExistsCardParamsEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    AddExistsCardParamsListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/addExistsCardParamsEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    AddExistsCardParamsUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/addExistsCardParamsEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    AssetPairCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/assetPairEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    AssetPairListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/assetPairEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    AvailableOperationsListRequest: {
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    AvailableOperationsListResponse: {
      properties: {
        items: {
          description: "in: body",
          items: {
            $ref:
              "#/definitions/AvailableOperationsListResponse_AvailableOperation",
          },
          type: "array",
          "x-go-name": "Items",
        },
      },
      required: ["items"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    AvailableOperationsListResponse_AvailableOperation: {
      properties: {
        label: {
          type: "string",
          "x-go-name": "Label",
        },
        value: {
          type: "string",
          "x-go-name": "Value",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    AvailableProvider: {
      properties: {
        label: {
          type: "string",
          "x-go-name": "Label",
        },
        provider_type: {
          type: "string",
          "x-go-name": "ProviderType",
        },
        value: {
          type: "string",
          "x-go-name": "Value",
        },
      },
      required: ["label", "value", "provider_type"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/common",
    },
    AvailableProviderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/AvailableProvider",
          },
          type: "array",
          "x-go-name": "Items",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    BuyCryptoByCardInput: {
      properties: {
        amount: {
          description: "in: body",
          format: "double",
          type: "number",
          "x-go-name": "Amount",
        },
        card_id: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "CardId",
        },
        fiat: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "Fiat",
        },
        wallet_id: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "WalletId",
        },
      },
      required: ["card_id", "wallet_id", "amount", "fiat"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoByCardParamsByMerchantForCustomerResponse: {
      properties: {
        item: {
          $ref: "#/definitions/BuyCryptoByCardParamsCustomer",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoByCardParamsByMerchantResponse: {
      properties: {
        item: {
          $ref: "#/definitions/buyCryptoByCardParamsEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoByCardParamsCreateRequest: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        available_cryptos: {
          description: "in: body",
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "AvailableCryptos",
        },
        available_fiats: {
          description: "in: body",
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "AvailableFiats",
        },
        cards_providers: {
          description: "in: body",
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CardsProviders",
        },
        custody_providers: {
          description: "in: body",
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CustodyProviders",
        },
        default_currency: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "DefaultCurrency",
        },
        default_fiat: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "DefaultFiat",
        },
        fees: {
          items: {
            $ref: "#/definitions/FeeEntity",
          },
          type: "array",
          "x-go-name": "Fees",
        },
        max_amount: {
          description: "in: body",
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        merchant_id: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        min_amount: {
          description: "in: body",
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
        name: {
          description: "in: body",
          type: "string",
          "x-go-name": "Name",
        },
        rate_overvaluation_in_percent: {
          description: "in: body",
          format: "int32",
          type: "integer",
          "x-go-name": "RateOvervaluationInPercent",
        },
      },
      required: [
        "name",
        "merchant_id",
        "min_amount",
        "max_amount",
        "default_currency",
        "default_fiat",
        "available_fiats",
        "available_cryptos",
        "rate_overvaluation_in_percent",
        "cards_providers",
        "custody_providers",
      ],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoByCardParamsCustomer: {
      properties: {
        available_cryptos: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "AvailableCryptos",
        },
        available_fiats: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "AvailableFiats",
        },
        default_currency: {
          format: "uint32",
          type: "integer",
          "x-go-name": "DefaultCurrency",
        },
        default_fiat: {
          format: "uint32",
          type: "integer",
          "x-go-name": "DefaultFiat",
        },
        fees: {
          items: {
            $ref: "#/definitions/FeeCustomer",
          },
          type: "array",
          "x-go-name": "Fees",
        },
        max_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        min_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoByCardParamsListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/buyCryptoByCardParamsEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoByCardParamsUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/buyCryptoByCardParamsEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoBySkrillInput: {
      properties: {
        amount: {
          description: "in: body",
          format: "double",
          type: "number",
          "x-go-name": "Amount",
        },
        skrill_id: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "SkrillId",
        },
        wallet_id: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "WalletId",
        },
      },
      required: ["wallet_id", "skrill_id", "amount"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoBySkrillParamsByMerchantForCustomerResponse: {
      properties: {
        item: {
          $ref: "#/definitions/BuyCryptoBySkrillParamsCustomer",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoBySkrillParamsByMerchantResponse: {
      properties: {
        item: {
          $ref: "#/definitions/buyCryptoBySkrillParamsEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoBySkrillParamsCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/buyCryptoBySkrillParamsEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoBySkrillParamsCustomer: {
      properties: {
        available_fiats: {
          items: {
            type: "string",
          },
          type: "array",
          "x-go-name": "AvailableFiats",
        },
        default_currency: {
          type: "string",
          "x-go-name": "DefaultCurrency",
        },
        default_fiat: {
          type: "string",
          "x-go-name": "DefaultFiat",
        },
        fees: {
          items: {
            $ref: "#/definitions/FeeCustomer",
          },
          type: "array",
          "x-go-name": "Fees",
        },
        max_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        min_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoBySkrillParamsListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/buyCryptoBySkrillParamsEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    BuyCryptoBySkrillParamsUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/buyCryptoBySkrillParamsEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    CardCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/cardEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CardListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/cardEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CardOrderCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/cardOrderEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CardOrderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/cardOrderEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CardProviderCreateRequest: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        key: {
          type: "string",
          "x-go-name": "Key",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
      },
      required: ["provider", "name"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CardProviderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/cardProviderEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CardProviderUpdateEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        key: {
          type: "string",
          "x-go-name": "Key",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
      },
      required: ["provider", "id", "name"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CommentedResponse: {
      properties: {
        comment: {
          type: "string",
          "x-go-name": "Comment",
        },
        result: {
          type: "boolean",
          "x-go-name": "Result",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/common",
    },
    CounterpartCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/counterpartEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    CounterpartListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/counterpartEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    CounterpartUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/counterpartEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    CryptoCreateRequest: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        available_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "AvailableProviders",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        symbol: {
          type: "string",
          "x-go-name": "Symbol",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CryptoListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/cryptoEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CryptoUpdateEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        available_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "AvailableProviders",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        symbol: {
          type: "string",
          "x-go-name": "Symbol",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CurrencyCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/currencyEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CurrencyListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/currencyEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CurrencyPriceCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/currencyPriceEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CurrencyPriceListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/currencyPriceEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CurrencyPriceUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/currencyPriceEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CustodyProviderCreateRequest: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        wallet_id: {
          type: "string",
          "x-go-name": "WalletId",
        },
        websocket: {
          type: "boolean",
          "x-go-name": "Websocket",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CustodyProviderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/custodyProviderEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CustodyProviderUpdateEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        wallet_id: {
          type: "string",
          "x-go-name": "WalletId",
        },
        websocket: {
          type: "boolean",
          "x-go-name": "Websocket",
        },
      },
      required: ["id", "name", "provider"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    CustomerEntity: {
      description: "models",
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        comment: {
          type: "string",
          "x-go-name": "Comment",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        currency: {
          type: "string",
          "x-go-name": "Currency",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        email: {
          type: "string",
          "x-go-name": "Email",
        },
        firstname: {
          type: "string",
          "x-go-name": "Firstname",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        is_email_verification: {
          type: "boolean",
          "x-go-name": "IsEmailVerification",
        },
        is_phone_verification: {
          type: "boolean",
          "x-go-name": "IsPhoneVerification",
        },
        is_primary_account: {
          type: "boolean",
          "x-go-name": "IsPrimaryAccount",
        },
        language: {
          type: "string",
          "x-go-name": "Language",
        },
        level: {
          format: "int32",
          type: "integer",
          "x-go-name": "Level",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        password: {
          type: "string",
          "x-go-name": "Password",
        },
        phone: {
          type: "string",
          "x-go-name": "Phone",
        },
        primary_customer: {
          format: "uint32",
          type: "integer",
          "x-go-name": "PrimaryCustomer",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        surname: {
          type: "string",
          "x-go-name": "Surname",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    CustomerListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/CustomerEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    CustomerSignUpStartRequest: {
      properties: {
        accept_terms: {
          type: "boolean",
          "x-go-name": "AcceptTerms",
        },
        password: {
          description: "in: body",
          type: "string",
          "x-go-name": "Password",
        },
        phone: {
          description: "in: body",
          type: "string",
          "x-go-name": "Phone",
        },
        referral_code: {
          type: "string",
          "x-go-name": "ReferralCode",
        },
      },
      required: ["phone", "password"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    ExchangeCryptoInput: {
      properties: {
        amount: {
          description: "in: body",
          format: "double",
          type: "number",
          "x-go-name": "Amount",
        },
        destination_symbol: {
          description: "in: body",
          type: "string",
          "x-go-name": "DestinationSymbol",
        },
        source_symbol: {
          description: "in: body",
          type: "string",
          "x-go-name": "SourceSymbol",
        },
      },
      required: ["source_symbol", "destination_symbol", "amount"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    ExchangeCryptoParamsByMerchantForCustomerResponse: {
      properties: {
        item: {
          $ref: "#/definitions/ExchangeCryptoParamsCustomer",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    ExchangeCryptoParamsCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/exchangeCryptoParamsEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    ExchangeCryptoParamsCustomer: {
      properties: {
        default_destination_symbol: {
          type: "string",
          "x-go-name": "DefaultDestinationSymbol",
        },
        default_source_symbol: {
          type: "string",
          "x-go-name": "DefaultSourceSymbol",
        },
        max_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        min_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    ExchangeCryptoParamsListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/exchangeCryptoParamsEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    ExchangeCryptoParamsUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/exchangeCryptoParamsEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    ExchangeProviderCreateRequest: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        key: {
          type: "string",
          "x-go-name": "Key",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        websocket: {
          type: "boolean",
          "x-go-name": "Websocket",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    ExchangeProviderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/exchangeProviderEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    ExchangeProviderUpdateEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        key: {
          type: "string",
          "x-go-name": "Key",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        websocket: {
          type: "boolean",
          "x-go-name": "Websocket",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    FeeCustomer: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        commission: {
          format: "float",
          type: "number",
          "x-go-name": "Commission",
        },
        description: {
          type: "string",
          "x-go-name": "Description",
        },
        fee_type: {
          $ref: "#/definitions/FeeType",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        order: {
          format: "int32",
          type: "integer",
          "x-go-name": "Order",
        },
        price: {
          format: "float",
          type: "number",
          "x-go-name": "Price",
        },
        steps: {
          items: {
            $ref: "#/definitions/FeeStep",
          },
          type: "array",
          "x-go-name": "Steps",
        },
      },
      required: ["fee_type", "commission"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    FeeEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        commission: {
          format: "float",
          type: "number",
          "x-go-name": "Commission",
        },
        description: {
          type: "string",
          "x-go-name": "Description",
        },
        fee_type: {
          $ref: "#/definitions/FeeType",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        operation: {
          type: "string",
          "x-go-name": "Operation",
        },
        order: {
          format: "int32",
          type: "integer",
          "x-go-name": "Order",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        steps: {
          items: {
            $ref: "#/definitions/FeeStep",
          },
          type: "array",
          "x-go-name": "Steps",
        },
      },
      required: ["fee_type", "commission", "operation", "merchant_id", "order"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    FeeStep: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        commission: {
          format: "float",
          type: "number",
          "x-go-name": "Commission",
        },
        condition_value: {
          format: "float",
          type: "number",
          "x-go-name": "ConditionValue",
        },
        description: {
          type: "string",
          "x-go-name": "Description",
        },
        price: {
          format: "float",
          type: "number",
          "x-go-name": "Price",
        },
        title: {
          type: "string",
          "x-go-name": "Title",
        },
      },
      required: [
        "commission",
        "condition_value",
        "description",
        "price",
        "active",
      ],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    FeeType: {
      format: "int32",
      type: "integer",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    FiatCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/fiatEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    FiatListForCustomerResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/fiatCustomerEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    FiatListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/fiatEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    FiatProviderCreateRequest: {
      properties: {
        host: {
          type: "string",
          "x-go-name": "Host",
        },
        key: {
          type: "string",
          "x-go-name": "Key",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    FiatProviderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/fiatProviderEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    FiatProviderUpdateEntity: {
      properties: {
        host: {
          type: "string",
          "x-go-name": "Host",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        key: {
          type: "string",
          "x-go-name": "Key",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    FiatRateListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/fiatRateEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    GeneralValidationError: {
      properties: {
        code: {
          format: "int64",
          type: "integer",
          "x-go-name": "Code",
        },
        errors: {
          additionalProperties: {
            type: "string",
          },
          type: "object",
          "x-go-name": "Errors",
        },
        message: {
          type: "string",
          "x-go-name": "Message",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/cmd/admin/delivery",
    },
    HostListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/hostEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    InternalProviderCreateRequest: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    InternalProviderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/internalProviderEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    InternalProviderUpdateEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    InternalWalletCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/internalWalletEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    InternalWalletCustomerListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/internalWalletCustomerEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
      },
      required: ["items"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    InternalWalletListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/internalWalletEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    InternalWalletUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/internalWalletEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    KycProviderCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/kycProviderEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/defence/pb",
    },
    KycProviderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/kycProviderEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/defence/pb",
    },
    KycProviderUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/kycProviderEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/defence/pb",
    },
    KytProviderCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/kytProviderEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/defence/pb",
    },
    KytProviderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/kytProviderEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/defence/pb",
    },
    KytProviderUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/kytProviderEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/defence/pb",
    },
    MerchantCreateRequest: {
      properties: {
        active: {
          description: "in: body",
          type: "boolean",
          "x-go-name": "Active",
        },
        description: {
          description: "in: body",
          type: "string",
          "x-go-name": "Description",
        },
        id: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          description: "in: body",
          type: "string",
          "x-go-name": "Name",
        },
        operations: {
          description: "in: body",
          items: {
            type: "string",
          },
          type: "array",
          "x-go-name": "Operations",
        },
      },
      required: ["id", "name", "operations"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    MerchantGetResponse: {
      properties: {
        item: {
          $ref: "#/definitions/merchantEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    MerchantListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/merchantEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    MerchantUpdateRequest: {
      properties: {
        active: {
          description: "in: body",
          type: "boolean",
          "x-go-name": "Active",
        },
        description: {
          description: "in: body",
          type: "string",
          "x-go-name": "Description",
        },
        id: {
          description: "in: path",
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          description: "in: body",
          type: "string",
          "x-go-name": "Name",
        },
        operations: {
          description: "in: body",
          items: {
            type: "string",
          },
          type: "array",
          "x-go-name": "Operations",
        },
      },
      required: ["name", "operations"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    MerchantsSymbolsCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/merchantsSymbolsEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    MerchantsSymbolsListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/merchantsSymbolsEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    MerchantsSymbolsUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/merchantsSymbolsEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    MessageCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/messageEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/support/pb",
    },
    MessageListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/messageEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/support/pb",
    },
    MessageUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/messageEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/support/pb",
    },
    NotificationProviderCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/notificationProviderEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    NotificationProviderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/notificationProviderEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    NotificationProviderUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/notificationProviderEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    Pagination: {
      properties: {
        limit: {
          format: "int64",
          type: "integer",
          "x-go-name": "Limit",
        },
        skip: {
          format: "int64",
          type: "integer",
          "x-go-name": "Skip",
        },
        total_items: {
          format: "int64",
          type: "integer",
          "x-go-name": "TotalItems",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/common",
    },
    PaymentCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/paymentEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    PaymentListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/paymentEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    PaymentProviderCreateRequest: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        cancel_callback_url: {
          type: "string",
          "x-go-name": "CancelCallbackUrl",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        failed_callback_url: {
          type: "string",
          "x-go-name": "FailedCallbackUrl",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        ssl: {
          type: "string",
          "x-go-name": "Ssl",
        },
        success_callback_url: {
          type: "string",
          "x-go-name": "SuccessCallbackUrl",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    PaymentProviderListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/paymentProviderEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    PaymentProviderUpdateEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        cancel_callback_url: {
          type: "string",
          "x-go-name": "CancelCallbackUrl",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        failed_callback_url: {
          type: "string",
          "x-go-name": "FailedCallbackUrl",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        ssl: {
          type: "string",
          "x-go-name": "Ssl",
        },
        success_callback_url: {
          type: "string",
          "x-go-name": "SuccessCallbackUrl",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    PaymentUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/paymentEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    PayoutCryptoByAddressInput: {
      properties: {
        address: {
          description: "in: body",
          type: "string",
          "x-go-name": "Address",
        },
        amount: {
          description: "in: body",
          format: "double",
          type: "number",
          "x-go-name": "Amount",
        },
        wallet_id: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "WalletId",
        },
      },
      required: ["address", "wallet_id", "amount"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoByAddressParamsByMerchantForCustomerResponse: {
      properties: {
        item: {
          $ref: "#/definitions/PayoutCryptoByAddressParamsCustomer",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoByAddressParamsCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/payoutCryptoByAddressParamsEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoByAddressParamsCustomer: {
      properties: {
        default_currency: {
          type: "string",
          "x-go-name": "DefaultCurrency",
        },
        max_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        min_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoByAddressParamsListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/payoutCryptoByAddressParamsEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoByAddressParamsUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/payoutCryptoByAddressParamsEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoToCardInput: {
      properties: {
        amount: {
          description: "in: body",
          format: "double",
          type: "number",
          "x-go-name": "Amount",
        },
        card_id: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "CardId",
        },
        wallet_id: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "WalletId",
        },
      },
      required: ["card_id", "wallet_id", "amount"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoToCardParamsByMerchantForCustomerResponse: {
      properties: {
        item: {
          $ref: "#/definitions/PayoutCryptoToCardParamsCustomer",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoToCardParamsByMerchantResponse: {
      properties: {
        item: {
          $ref: "#/definitions/payoutCryptoToCardParamsEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoToCardParamsCreateRequest: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        available_fiats: {
          description: "in: body",
          items: {
            type: "string",
          },
          type: "array",
          "x-go-name": "AvailableFiats",
        },
        cards_providers: {
          description: "in: body",
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CardsProviders",
        },
        custody_providers: {
          description: "in: body",
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CustodyProviders",
        },
        default_currency: {
          description: "in: body",
          type: "string",
          "x-go-name": "DefaultCurrency",
        },
        default_fiat: {
          description: "in: body",
          type: "string",
          "x-go-name": "DefaultFiat",
        },
        fees: {
          items: {
            $ref: "#/definitions/FeeEntity",
          },
          type: "array",
          "x-go-name": "Fees",
        },
        max_amount: {
          description: "in: body",
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        merchant_id: {
          description: "in: body",
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        min_amount: {
          description: "in: body",
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
        name: {
          description: "in: body",
          type: "string",
          "x-go-name": "Name",
        },
        rate_overvaluation_in_percent: {
          description: "in: body",
          format: "int32",
          type: "integer",
          "x-go-name": "RateOvervaluationInPercent",
        },
      },
      required: [
        "name",
        "merchant_id",
        "min_amount",
        "max_amount",
        "default_currency",
        "default_fiat",
        "available_fiats",
        "rate_overvaluation_in_percent",
        "cards_providers",
        "custody_providers",
      ],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoToCardParamsCustomer: {
      properties: {
        available_fiats: {
          items: {
            type: "string",
          },
          type: "array",
          "x-go-name": "AvailableFiats",
        },
        default_currency: {
          type: "string",
          "x-go-name": "DefaultCurrency",
        },
        default_fiat: {
          type: "string",
          "x-go-name": "DefaultFiat",
        },
        fees: {
          items: {
            $ref: "#/definitions/FeeCustomer",
          },
          type: "array",
          "x-go-name": "Fees",
        },
        max_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        min_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoToCardParamsListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/payoutCryptoToCardParamsEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    PayoutCryptoToCardParamsUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/payoutCryptoToCardParamsEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    ProvidersSymbolsCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/providersSymbolsEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    ProvidersSymbolsListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/providersSymbolsEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    ProvidersSymbolsUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/providersSymbolsEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    RoomCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/roomEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/support/pb",
    },
    RoomListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/roomEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/support/pb",
    },
    RoomUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/roomEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/support/pb",
    },
    SendLogCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/sendLogEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    SendLogListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/sendLogEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    SubdivisionCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/subdivisionEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    SubdivisionListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/subdivisionEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    SubdivisionUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/subdivisionEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    TemplateCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/templateEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    TemplateListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/templateEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    TemplateUpdateRequest: {
      description: "models",
      properties: {
        item: {
          $ref: "#/definitions/templateEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    UserCreateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/userEntity",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    UserListResponse: {
      properties: {
        items: {
          items: {
            $ref: "#/definitions/userEntity",
          },
          type: "array",
          "x-go-name": "Items",
        },
        pagination: {
          $ref: "#/definitions/Pagination",
        },
      },
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    UserSignInRequest: {
      properties: {
        otp: {
          type: "string",
          "x-go-name": "Otp",
        },
        password: {
          type: "string",
          "x-go-name": "Password",
        },
        username: {
          type: "string",
          "x-go-name": "Username",
        },
      },
      required: ["username", "password"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    UserSignInResponse: {
      properties: {
        refresh_token: {
          description: "in: body",
          type: "string",
          "x-go-name": "RefreshToken",
        },
        token: {
          description: "in: body",
          type: "string",
          "x-go-name": "Token",
        },
      },
      required: ["token", "refresh_token"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    UserType: {
      format: "int32",
      type: "integer",
      "x-go-package": "github.com/epicbytes/fintech/pkg/common",
    },
    UserUpdateRequest: {
      properties: {
        item: {
          $ref: "#/definitions/userEntity",
        },
      },
      required: ["item"],
      type: "object",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    addExistsCardParamsEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        cards_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CardsProviders",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "AddExistsCardParamsEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    assetPairEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        base: {
          type: "string",
          "x-go-name": "Base",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        quote: {
          type: "string",
          "x-go-name": "Quote",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        symbol: {
          type: "string",
          "x-go-name": "Symbol",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "AssetPairEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    buyCryptoByCardParamsEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        available_cryptos: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "AvailableCryptos",
        },
        available_fiats: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "AvailableFiats",
        },
        cards_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CardsProviders",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        custody_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CustodyProviders",
        },
        default_currency: {
          format: "uint32",
          type: "integer",
          "x-go-name": "DefaultCurrency",
        },
        default_fiat: {
          format: "uint32",
          type: "integer",
          "x-go-name": "DefaultFiat",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        fees: {
          items: {
            $ref: "#/definitions/FeeEntity",
          },
          type: "array",
          "x-go-name": "Fees",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        max_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        min_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        rate_overvaluation_in_percent: {
          format: "int32",
          type: "integer",
          "x-go-name": "RateOvervaluationInPercent",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "BuyCryptoByCardParamsEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    buyCryptoBySkrillParamsEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        available_fiats: {
          items: {
            type: "string",
          },
          type: "array",
          "x-go-name": "AvailableFiats",
        },
        cards_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CardsProviders",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        custody_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CustodyProviders",
        },
        default_currency: {
          type: "string",
          "x-go-name": "DefaultCurrency",
        },
        default_fiat: {
          type: "string",
          "x-go-name": "DefaultFiat",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        fees: {
          items: {
            $ref: "#/definitions/FeeEntity",
          },
          type: "array",
          "x-go-name": "Fees",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        max_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        min_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        rate_overvaluation_in_percent: {
          format: "int32",
          type: "integer",
          "x-go-name": "RateOvervaluationInPercent",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "BuyCryptoBySkrillParamsEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    cardEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        customer_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "CustomerId",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        pan_number: {
          type: "string",
          "x-go-name": "PanNumber",
        },
        provider: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Provider",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        status: {
          type: "string",
          "x-go-name": "Status",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "CardEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    cardOrderEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        address_line_1: {
          type: "string",
          "x-go-name": "AddressLine_1",
        },
        address_line_2: {
          type: "string",
          "x-go-name": "AddressLine_2",
        },
        city: {
          type: "string",
          "x-go-name": "City",
        },
        country: {
          type: "string",
          "x-go-name": "Country",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        customer_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "CustomerId",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        firstname: {
          type: "string",
          "x-go-name": "Firstname",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        lastname: {
          type: "string",
          "x-go-name": "Lastname",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        postal_code: {
          type: "string",
          "x-go-name": "PostalCode",
        },
        provider_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "ProviderId",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        status: {
          type: "string",
          "x-go-name": "Status",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "CardOrderEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    cardProviderEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        key: {
          type: "string",
          "x-go-name": "Key",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-name": "CardProviderEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    counterpartEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        bank_account_name: {
          type: "string",
          "x-go-name": "BankAccountName",
        },
        bank_account_number: {
          type: "string",
          "x-go-name": "BankAccountNumber",
        },
        bank_name: {
          type: "string",
          "x-go-name": "BankName",
        },
        comment: {
          type: "string",
          "x-go-name": "Comment",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        details: {
          type: "string",
          "x-go-name": "Details",
        },
        iban: {
          type: "string",
          "x-go-name": "Iban",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        sort_code: {
          type: "string",
          "x-go-name": "SortCode",
        },
        swift_code: {
          type: "string",
          "x-go-name": "SwiftCode",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "CounterpartEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    cryptoEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        available_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "AvailableProviders",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        symbol: {
          type: "string",
          "x-go-name": "Symbol",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "CryptoEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    currencyEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        available_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "AvailableProviders",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        symbol: {
          type: "string",
          "x-go-name": "Symbol",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      required: ["symbol"],
      type: "object",
      "x-go-name": "CurrencyEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    currencyPriceEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        price: {
          format: "double",
          type: "number",
          "x-go-name": "Price",
        },
        provider_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "ProviderId",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "CurrencyPriceEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    currencyPriceForCustomerEntity: {
      properties: {
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        price: {
          format: "double",
          type: "number",
          "x-go-name": "Price",
        },
      },
      type: "object",
      "x-go-name": "CurrencyPriceForCustomerEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    custodyProviderEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
        wallet_id: {
          type: "string",
          "x-go-name": "WalletId",
        },
        websocket: {
          type: "boolean",
          "x-go-name": "Websocket",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-name": "CustodyProviderEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    customerProfileEntity: {
      properties: {
        balance: {
          format: "double",
          type: "number",
          "x-go-name": "Balance",
        },
        currency: {
          type: "string",
          "x-go-name": "Currency",
        },
        email: {
          type: "string",
          "x-go-name": "Email",
        },
        firstname: {
          type: "string",
          "x-go-name": "Firstname",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        is_email_verification: {
          type: "boolean",
          "x-go-name": "IsEmailVerification",
        },
        is_phone_verification: {
          type: "boolean",
          "x-go-name": "IsPhoneVerification",
        },
        language: {
          type: "string",
          "x-go-name": "Language",
        },
        level: {
          format: "int32",
          type: "integer",
          "x-go-name": "Level",
        },
        phone: {
          type: "string",
          "x-go-name": "Phone",
        },
        profit: {
          format: "int32",
          type: "integer",
          "x-go-name": "Profit",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        surname: {
          type: "string",
          "x-go-name": "Surname",
        },
      },
      type: "object",
      "x-go-name": "CustomerProfileEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    customerSignInResponse: {
      properties: {
        access_token: {
          type: "string",
          "x-go-name": "AccessToken",
        },
        refresh_token: {
          type: "string",
          "x-go-name": "RefreshToken",
        },
      },
      type: "object",
      "x-go-name": "CustomerSignInResponse",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    exchangeCryptoParamsEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        default_destination_symbol: {
          type: "string",
          "x-go-name": "DefaultDestinationSymbol",
        },
        default_source_symbol: {
          type: "string",
          "x-go-name": "DefaultSourceSymbol",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        exchange_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "ExchangeProviders",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "ExchangeCryptoParamsEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    exchangeProviderEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        key: {
          type: "string",
          "x-go-name": "Key",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
        websocket: {
          type: "boolean",
          "x-go-name": "Websocket",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-name": "ExchangeProviderEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    fiatCustomerEntity: {
      properties: {
        description: {
          type: "string",
          "x-go-name": "Description",
        },
        icon: {
          type: "string",
          "x-go-name": "Icon",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        rate: {
          format: "double",
          type: "number",
          "x-go-name": "Rate",
        },
      },
      type: "object",
      "x-go-name": "FiatCustomerEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    fiatEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        description: {
          type: "string",
          "x-go-name": "Description",
        },
        icon: {
          type: "string",
          "x-go-name": "Icon",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        is_fetching_rate: {
          type: "boolean",
          "x-go-name": "IsFetchingRate",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "ProviderId",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      required: ["name", "icon"],
      type: "object",
      "x-go-name": "FiatEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    fiatProviderEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        host: {
          type: "string",
          "x-go-name": "Host",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        key: {
          type: "string",
          "x-go-name": "Key",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "FiatProviderEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    fiatRateCustomerEntity: {
      properties: {
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        rate: {
          format: "double",
          type: "number",
          "x-go-name": "Rate",
        },
      },
      type: "object",
      "x-go-name": "FiatRateCustomerEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    fiatRateEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        base_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "BaseId",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        description: {
          type: "string",
          "x-go-name": "Description",
        },
        icon: {
          type: "string",
          "x-go-name": "Icon",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        latest: {
          format: "int64",
          type: "integer",
          "x-go-name": "Latest",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "ProviderId",
        },
        rate: {
          format: "double",
          type: "number",
          "x-go-name": "Rate",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "FiatRateEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    hostEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        css: {
          format: "base64",
          type: "string",
          "x-go-name": "Css",
        },
        default_language: {
          type: "string",
          "x-go-name": "DefaultLanguage",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        favicon: {
          type: "string",
          "x-go-name": "Favicon",
        },
        hostname: {
          type: "string",
          "x-go-name": "Hostname",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        logo: {
          type: "string",
          "x-go-name": "Logo",
        },
        logo_min: {
          type: "string",
          "x-go-name": "LogoMin",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        organization_name: {
          type: "string",
          "x-go-name": "OrganizationName",
        },
        privacy_policy_url: {
          type: "string",
          "x-go-name": "PrivacyPolicyUrl",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        terms_and_condition_url: {
          type: "string",
          "x-go-name": "TermsAndConditionUrl",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "HostEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    hostInfo: {
      properties: {
        language: {
          type: "string",
          "x-go-name": "Language",
        },
        m: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Merchant",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        organization_name: {
          type: "string",
          "x-go-name": "OrganizationName",
        },
        privacy_policy_url: {
          type: "string",
          "x-go-name": "PrivacyPolicyUrl",
        },
        terms_and_condition_url: {
          type: "string",
          "x-go-name": "TermsAndConditionUrl",
        },
      },
      required: ["language", "organization_name", "m"],
      type: "object",
      "x-go-name": "HostInfo",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    internalProviderEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-name": "InternalProviderEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    internalWalletCustomerEntity: {
      properties: {
        address: {
          type: "string",
          "x-go-name": "Address",
        },
        balance: {
          format: "float",
          type: "number",
          "x-go-name": "Balance",
        },
        balanceInDefaultCurrency: {
          format: "float",
          type: "number",
          "x-go-name": "BalanceInDefaultCurrency",
        },
        currency: {
          type: "string",
          "x-go-name": "Currency",
        },
        direction: {
          type: "boolean",
          "x-go-name": "Direction",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        latestUpdate: {
          format: "int64",
          type: "integer",
          "x-go-name": "LatestUpdate",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        rateInEUR: {
          type: "string",
          "x-go-name": "RateInEUR",
        },
      },
      required: ["id", "name", "balance", "currency", "latestUpdate"],
      type: "object",
      "x-go-name": "InternalWalletCustomerEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    internalWalletEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        address: {
          type: "string",
          "x-go-name": "Address",
        },
        balance: {
          format: "float",
          type: "number",
          "x-go-name": "Balance",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        currency: {
          type: "string",
          "x-go-name": "Currency",
        },
        customer_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "CustomerId",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "ProviderId",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        stucked_balance: {
          format: "float",
          type: "number",
          "x-go-name": "StuckedBalance",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "InternalWalletEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    kycProviderEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "KycProviderEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/defence/pb",
    },
    kytProviderEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        environment: {
          type: "string",
          "x-go-name": "Environment",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "KytProviderEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/defence/pb",
    },
    merchantEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        description: {
          type: "string",
          "x-go-name": "Description",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        operations: {
          items: {
            type: "string",
          },
          type: "array",
          "x-go-name": "Operations",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "MerchantEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
    merchantsSymbolsEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider_ids: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "ProviderIds",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        symbol: {
          type: "string",
          "x-go-name": "Symbol",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "MerchantsSymbolsEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    messageEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        is_visible_for_customer: {
          type: "boolean",
          "x-go-name": "IsVisibleForCustomer",
        },
        is_visible_for_merchant: {
          type: "boolean",
          "x-go-name": "IsVisibleForMerchant",
        },
        message: {
          format: "base64",
          type: "string",
          "x-go-name": "Message",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        readed_by_customers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "ReadedByCustomers",
        },
        readed_by_merchants: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "ReadedByMerchants",
        },
        readed_by_users: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "ReadedByUsers",
        },
        room_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "RoomId",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        type: {
          type: "string",
          "x-go-name": "Type",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "MessageEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/support/pb",
    },
    notificationProviderEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        password: {
          type: "string",
          "x-go-name": "Password",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        type: {
          type: "string",
          "x-go-name": "Type",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
        username: {
          type: "string",
          "x-go-name": "Username",
        },
      },
      type: "object",
      "x-go-name": "NotificationProviderEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    paymentEntity: {
      properties: {
        a_approved_at: {
          type: "boolean",
          "x-go-name": "AApprovedAt",
        },
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        amount: {
          format: "float",
          type: "number",
          "x-go-name": "Amount",
        },
        comment: {
          type: "string",
          "x-go-name": "Comment",
        },
        counterpart_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "CounterpartId",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        currency: {
          type: "string",
          "x-go-name": "Currency",
        },
        deadline_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeadlineAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        documents: {
          items: {
            type: "string",
          },
          type: "array",
          "x-go-name": "Documents",
        },
        f_approved_at: {
          type: "boolean",
          "x-go-name": "FApprovedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        invoice_number: {
          type: "string",
          "x-go-name": "InvoiceNumber",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        payment_details: {
          type: "string",
          "x-go-name": "PaymentDetails",
        },
        request_date: {
          format: "int64",
          type: "integer",
          "x-go-name": "RequestDate",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        status: {
          type: "string",
          "x-go-name": "Status",
        },
        subdivision_from_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "SubdivisionFromId",
        },
        subdivision_to_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "SubdivisionToId",
        },
        t_approved_at: {
          type: "boolean",
          "x-go-name": "TApprovedAt",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "PaymentEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    paymentProviderEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        cancel_callback_url: {
          type: "string",
          "x-go-name": "CancelCallbackUrl",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        debug: {
          type: "boolean",
          "x-go-name": "Debug",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        failed_callback_url: {
          type: "string",
          "x-go-name": "FailedCallbackUrl",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider: {
          type: "string",
          "x-go-name": "Provider",
        },
        secret: {
          type: "string",
          "x-go-name": "Secret",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        ssl: {
          type: "string",
          "x-go-name": "Ssl",
        },
        success_callback_url: {
          type: "string",
          "x-go-name": "SuccessCallbackUrl",
        },
        token: {
          type: "string",
          "x-go-name": "Token",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      required: ["name", "provider"],
      type: "object",
      "x-go-name": "PaymentProviderEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    payoutCryptoByAddressParamsEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        custody_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CustodyProviders",
        },
        default_currency: {
          type: "string",
          "x-go-name": "DefaultCurrency",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        max_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        min_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "PayoutCryptoByAddressParamsEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    payoutCryptoToCardParamsEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        available_fiats: {
          items: {
            type: "string",
          },
          type: "array",
          "x-go-name": "AvailableFiats",
        },
        cards_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CardsProviders",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        custody_providers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "CustodyProviders",
        },
        default_currency: {
          type: "string",
          "x-go-name": "DefaultCurrency",
        },
        default_fiat: {
          type: "string",
          "x-go-name": "DefaultFiat",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        fees: {
          items: {
            $ref: "#/definitions/FeeEntity",
          },
          type: "array",
          "x-go-name": "Fees",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        max_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MaxAmount",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        min_amount: {
          format: "float",
          type: "number",
          "x-go-name": "MinAmount",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        rate_overvaluation_in_percent: {
          format: "int32",
          type: "integer",
          "x-go-name": "RateOvervaluationInPercent",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "PayoutCryptoToCardParamsEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/operation/pb",
    },
    providersSymbolsEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "ProviderId",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "ProvidersSymbolsEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/finance/pb",
    },
    roomEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        customers: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "Customers",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        merchants: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "Merchants",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
        users: {
          items: {
            format: "uint32",
            type: "integer",
          },
          type: "array",
          "x-go-name": "Users",
        },
      },
      type: "object",
      "x-go-name": "RoomEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/support/pb",
    },
    sendLogEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        error: {
          type: "string",
          "x-go-name": "Error",
        },
        from: {
          type: "string",
          "x-go-name": "From",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        message: {
          type: "string",
          "x-go-name": "Message",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "ProviderId",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        to: {
          type: "string",
          "x-go-name": "To",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "SendLogEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    subdivisionEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        comment: {
          type: "string",
          "x-go-name": "Comment",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "SubdivisionEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/bookkeeping/pb",
    },
    templateEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        body: {
          type: "string",
          "x-go-name": "Body",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        merchant_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "MerchantId",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        provider_id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "ProviderId",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        type: {
          type: "string",
          "x-go-name": "Type",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
      },
      type: "object",
      "x-go-name": "TemplateEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/notification/pb",
    },
    userEntity: {
      properties: {
        active: {
          type: "boolean",
          "x-go-name": "Active",
        },
        comment: {
          type: "string",
          "x-go-name": "Comment",
        },
        created_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "CreatedAt",
        },
        deleted_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "DeletedAt",
        },
        email: {
          type: "string",
          "x-go-name": "Email",
        },
        id: {
          format: "uint32",
          type: "integer",
          "x-go-name": "Id",
        },
        name: {
          type: "string",
          "x-go-name": "Name",
        },
        password: {
          type: "string",
          "x-go-name": "Password",
        },
        phone: {
          type: "string",
          "x-go-name": "Phone",
        },
        referral_code: {
          type: "string",
          "x-go-name": "ReferralCode",
        },
        slug: {
          type: "string",
          "x-go-name": "Slug",
        },
        type: {
          $ref: "#/definitions/UserType",
        },
        updated_at: {
          format: "int64",
          type: "integer",
          "x-go-name": "UpdatedAt",
        },
        username: {
          type: "string",
          "x-go-name": "Username",
        },
      },
      type: "object",
      "x-go-name": "UserEntity",
      "x-go-package": "github.com/epicbytes/fintech/pkg/auth/pb",
    },
  },
  host: "admin-api.fastesty.ru",
  info: {
    description:
      "there are no TOS at this moment, use at your own risk we take no responsibility",
    license: {
      name: "MIT",
      url: "https://crypterium.com",
    },
    title: "Admin API.",
    version: "0.0.1",
  },
  paths: {
    "/addExistsCardParams": {
      get: {
        operationId: "addExistsCardParamsListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/addExistsCardParamsListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of addExistsCardParams *GENERATE_FRONT_STORE*",
        tags: ["addExistsCardParams"],
      },
      post: {
        operationId: "addExistsCardParamsCreateRequest",
        parameters: [
          {
            description: "Create AddExistsCardParams Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/AddExistsCardParamsCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create addExistsCardParams *GENERATE_FRONT_FORM*",
        tags: ["addExistsCardParams"],
      },
      put: {
        operationId: "addExistsCardParamsUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/addExistsCardParamsEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update AddExistsCardParams Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/AddExistsCardParamsUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update addExistsCardParams *GENERATE_FRONT_FORM*",
        tags: ["addExistsCardParams"],
      },
    },
    "/addExistsCardParams/{id}": {
      get: {
        operationId: "addExistsCardParamsGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/addExistsCardParamsGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a addExistsCardParams from the database by id *GENERATE_FRONT_STORE*",
        tags: ["addExistsCardParams"],
      },
    },
    "/addExistsCardParams/delete/{id}": {
      delete: {
        description: "Delete addExistsCardParams",
        operationId: "addExistsCardParamsDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["addExistsCardParams"],
      },
    },
    "/addExistsCardParams/restore/{id}": {
      put: {
        description: "Restore addExistsCardParams",
        operationId: "addExistsCardParamsRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["addExistsCardParams"],
      },
    },
    "/assetPair": {
      get: {
        operationId: "assetPairListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/assetPairListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of assetPair *GENERATE_FRONT_STORE*",
        tags: ["assetPair"],
      },
      post: {
        operationId: "assetPairCreateRequest",
        parameters: [
          {
            description: "Create assetPair item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/AssetPairCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create assetPair *GENERATE_FRONT_FORM*",
        tags: ["assetPair"],
      },
      put: {
        operationId: "assetPairUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/assetPairEntity",
            },
            "x-go-name": "Item",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update assetPair *GENERATE_FRONT_FORM*",
        tags: ["assetPair"],
      },
    },
    "/assetPair/{id}": {
      get: {
        operationId: "assetPairGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/assetPairGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a assetPair from the database by id *GENERATE_FRONT_STORE*",
        tags: ["assetPair"],
      },
    },
    "/assetPair/delete/{id}": {
      delete: {
        description: "Delete assetPair",
        operationId: "assetPairDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["assetPair"],
      },
    },
    "/assetPair/restore/{id}": {
      put: {
        description: "Restore assetPair",
        operationId: "assetPairRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["assetPair"],
      },
    },
    "/available_operations": {
      get: {
        operationId: "availableOperationsListRequest",
        parameters: [
          {
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/AvailableOperationsListRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/availableOperationsListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return available operations from the database by id *GENERATE_FRONT_STORE*",
        tags: ["operations"],
      },
    },
    "/available_providers": {
      get: {
        operationId: "availableProviderListRequest",
        responses: {
          "200": {
            $ref: "#/responses/availableProviderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return available providers from the database by id *GENERATE_FRONT_STORE*",
        tags: ["finance"],
      },
    },
    "/buyCryptoByCardParams": {
      get: {
        operationId: "buyCryptoByCardParamsListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/buyCryptoByCardParamsListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of buyCryptoByCardParams *GENERATE_FRONT_STORE*",
        tags: ["operations"],
      },
      post: {
        operationId: "buyCryptoByCardParamsCreateRequest",
        parameters: [
          {
            description: "Create BuyCryptoByCardParams Item",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/BuyCryptoByCardParamsCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create buyCryptoByCardParams *GENERATE_FRONT_FORM*",
        tags: ["operations"],
      },
      put: {
        operationId: "buyCryptoByCardParamsUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/buyCryptoByCardParamsEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update BuyCryptoByCardParams Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/BuyCryptoByCardParamsUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update buyCryptoByCardParams *GENERATE_FRONT_FORM*",
        tags: ["buyCryptoByCardParams"],
      },
    },
    "/buyCryptoByCardParams/{id}": {
      get: {
        operationId: "buyCryptoByCardParamsGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/buyCryptoByCardParamsGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a buyCryptoByCardParams from the database by id *GENERATE_FRONT_STORE*",
        tags: ["operations"],
      },
    },
    "/buyCryptoByCardParams/delete/{id}": {
      delete: {
        description: "Delete buyCryptoByCardParams",
        operationId: "buyCryptoByCardParamsDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["operations"],
      },
    },
    "/buyCryptoByCardParams/restore/{id}": {
      put: {
        description: "Restore buyCryptoByCardParams",
        operationId: "buyCryptoByCardParamsRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["operations"],
      },
    },
    "/buyCryptoByCardParamsByMerchant/{id}": {
      get: {
        operationId: "buyCryptoByCardParamsByMerchantRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "MerchantId",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/buyCryptoByCardParamsByMerchantResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create buyCryptoByCardParams *GENERATE_FRONT_STORE*",
        tags: ["operations"],
      },
    },
    "/card": {
      get: {
        operationId: "cardListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/cardListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of card *GENERATE_FRONT_STORE*",
        tags: ["card"],
      },
      post: {
        operationId: "cardCreateRequest",
        parameters: [
          {
            description: "Create card item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/CardCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create card *GENERATE_FRONT_FORM*",
        tags: ["card"],
      },
      put: {
        operationId: "cardUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/cardEntity",
            },
            "x-go-name": "Item",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update card *GENERATE_FRONT_FORM*",
        tags: ["card"],
      },
    },
    "/card/{id}": {
      get: {
        operationId: "cardGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/cardGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Return a card from the database by id *GENERATE_FRONT_STORE*",
        tags: ["card"],
      },
    },
    "/card/delete/{id}": {
      delete: {
        description: "Delete card",
        operationId: "cardDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["card"],
      },
    },
    "/card/restore/{id}": {
      put: {
        description: "Restore card",
        operationId: "cardRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["card"],
      },
    },
    "/cardOrder": {
      get: {
        operationId: "cardOrderListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/cardOrderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of cardOrder *GENERATE_FRONT_STORE*",
        tags: ["cardOrder"],
      },
      post: {
        operationId: "cardOrderCreateRequest",
        parameters: [
          {
            description: "Create cardOrder item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/CardOrderCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create cardOrder *GENERATE_FRONT_FORM*",
        tags: ["cardOrder"],
      },
      put: {
        operationId: "cardOrderUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/cardOrderEntity",
            },
            "x-go-name": "Item",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update cardOrder *GENERATE_FRONT_FORM*",
        tags: ["cardOrder"],
      },
    },
    "/cardOrder/{id}": {
      get: {
        operationId: "cardOrderGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/cardOrderGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a cardOrder from the database by id *GENERATE_FRONT_STORE*",
        tags: ["cardOrder"],
      },
    },
    "/cardOrder/delete/{id}": {
      delete: {
        description: "Delete cardOrder",
        operationId: "cardOrderDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["cardOrder"],
      },
    },
    "/cardOrder/restore/{id}": {
      put: {
        description: "Restore cardOrder",
        operationId: "cardOrderRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["cardOrder"],
      },
    },
    "/cardProvider": {
      get: {
        operationId: "cardProviderListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/cardProviderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of cardProvider*GENERATE_FRONT_STORE*",
        tags: ["cardProvider"],
      },
      post: {
        operationId: "cardProviderCreateRequest",
        parameters: [
          {
            description: "Create CardProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/CardProviderCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create cardProvider *GENERATE_FRONT_FORM*",
        tags: ["cardProvider"],
      },
      put: {
        operationId: "cardProviderUpdateRequest",
        parameters: [
          {
            description: "Update CardProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/CardProviderUpdateEntity",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update cardProvider *GENERATE_FRONT_FORM*",
        tags: ["cardProvider"],
      },
    },
    "/cardProvider/{id}": {
      get: {
        operationId: "cardProviderGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/cardProviderGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a cardProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["cardProvider"],
      },
    },
    "/cardProvider/delete/{id}": {
      delete: {
        description: "Delete cardProvider",
        operationId: "cardProviderDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["cardProvider"],
      },
    },
    "/cardProvider/restore/{id}": {
      put: {
        description: "Restore cardProvider",
        operationId: "cardProviderRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["cardProvider"],
      },
    },
    "/cardProviderUpdate/{id}": {
      get: {
        operationId: "cardProviderGetUpdateRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/cardProviderGetUpdateResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a cardProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["cardProvider"],
      },
    },
    "/counterpart": {
      get: {
        operationId: "counterpartListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/counterpartListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of counterpart*GENERATE_FRONT_STORE*",
        tags: ["counterpart"],
      },
      post: {
        operationId: "counterpartCreateRequest",
        parameters: [
          {
            description: "Create Counterpart Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/CounterpartCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create counterpart *GENERATE_FRONT_FORM*",
        tags: ["counterpart"],
      },
      put: {
        operationId: "counterpartUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/counterpartEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update Counterpart Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/CounterpartUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update counterpart *GENERATE_FRONT_FORM*",
        tags: ["counterpart"],
      },
    },
    "/counterpart/{id}": {
      get: {
        operationId: "counterpartGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/counterpartGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a counterpart from the database by id *GENERATE_FRONT_STORE*",
        tags: ["counterpart"],
      },
    },
    "/counterpart/delete/{id}": {
      delete: {
        description: "Delete counterpart",
        operationId: "counterpartDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["counterpart"],
      },
    },
    "/counterpart/restore/{id}": {
      put: {
        description: "Restore counterpart",
        operationId: "counterpartRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["counterpart"],
      },
    },
    "/crypto": {
      get: {
        operationId: "cryptoListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/cryptoListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of crypto*GENERATE_FRONT_STORE*",
        tags: ["crypto"],
      },
      post: {
        operationId: "cryptoCreateRequest",
        parameters: [
          {
            description: "Create Crypto Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/CryptoCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create crypto *GENERATE_FRONT_FORM*",
        tags: ["crypto"],
      },
      put: {
        operationId: "cryptoUpdateRequest",
        parameters: [
          {
            description: "Update Crypto Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/CryptoUpdateEntity",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update crypto *GENERATE_FRONT_FORM*",
        tags: ["crypto"],
      },
    },
    "/crypto/{id}": {
      get: {
        operationId: "cryptoGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/cryptoGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a crypto from the database by id *GENERATE_FRONT_STORE*",
        tags: ["crypto"],
      },
    },
    "/crypto/delete/{id}": {
      delete: {
        description: "Delete crypto",
        operationId: "cryptoDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["crypto"],
      },
    },
    "/crypto/restore/{id}": {
      put: {
        description: "Restore crypto",
        operationId: "cryptoRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["crypto"],
      },
    },
    "/cryptoUpdate/{id}": {
      get: {
        operationId: "cryptoGetUpdateRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/cryptoGetUpdateResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a crypto for update from the database by id *GENERATE_FRONT_STORE*",
        tags: ["crypto"],
      },
    },
    "/currency": {
      get: {
        operationId: "currencyListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/currencyListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of currency *GENERATE_FRONT_STORE*",
        tags: ["currency"],
      },
      post: {
        description: "Create currency",
        operationId: "currencyCreateRequest",
        parameters: [
          {
            description: "Create currency item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/CurrencyCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["currency"],
      },
      put: {
        operationId: "currencyUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/currencyEntity",
            },
            "x-go-name": "Item",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update currency *GENERATE_FRONT_FORM*",
        tags: ["currency"],
      },
    },
    "/currency/{id}": {
      get: {
        description: "Return a currency from the database by id",
        operationId: "currencyGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/currencyGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["currency"],
      },
    },
    "/currency/delete/{id}": {
      delete: {
        description: "Delete currency",
        operationId: "currencyDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["currency"],
      },
    },
    "/currency/restore/{id}": {
      put: {
        description: "Restore currency",
        operationId: "currencyRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["currency"],
      },
    },
    "/currencyPrice": {
      get: {
        operationId: "currencyPriceListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/currencyPriceListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of currencyPrice *GENERATE_FRONT_STORE*",
        tags: ["currencyPrice"],
      },
      post: {
        operationId: "currencyPriceCreateRequest",
        parameters: [
          {
            description: "Create CurrencyPrice Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/CurrencyPriceCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create currencyPrice *GENERATE_FRONT_FORM*",
        tags: ["currencyPrice"],
      },
      put: {
        operationId: "currencyPriceUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/currencyPriceEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update CurrencyPrice Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/CurrencyPriceUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update currencyPrice *GENERATE_FRONT_FORM*",
        tags: ["currencyPrice"],
      },
    },
    "/currencyPrice/{id}": {
      get: {
        operationId: "currencyPriceGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/currencyPriceGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a currencyPrice from the database by id *GENERATE_FRONT_STORE*",
        tags: ["currencyPrice"],
      },
    },
    "/currencyPrice/delete/{id}": {
      delete: {
        description: "Delete currencyPrice",
        operationId: "currencyPriceDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["currencyPrice"],
      },
    },
    "/currencyPrice/restore/{id}": {
      put: {
        description: "Restore currencyPrice",
        operationId: "currencyPriceRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["currencyPrice"],
      },
    },
    "/custodyProvider": {
      get: {
        operationId: "custodyProviderListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/custodyProviderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of custodyProvider*GENERATE_FRONT_STORE*",
        tags: ["custodyProvider"],
      },
      post: {
        operationId: "custodyProviderCreateRequest",
        parameters: [
          {
            description: "Create CustodyProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/CustodyProviderCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create custodyProvider *GENERATE_FRONT_FORM*",
        tags: ["custodyProvider"],
      },
      put: {
        operationId: "custodyProviderUpdateRequest",
        parameters: [
          {
            description: "Update CustodyProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/CustodyProviderUpdateEntity",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update custodyProvider *GENERATE_FRONT_FORM*",
        tags: ["custodyProvider"],
      },
    },
    "/custodyProvider/{id}": {
      get: {
        operationId: "custodyProviderGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/custodyProviderGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a custodyProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["custodyProvider"],
      },
    },
    "/custodyProvider/delete/{id}": {
      delete: {
        description: "Delete custodyProvider",
        operationId: "custodyProviderDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["custodyProvider"],
      },
    },
    "/custodyProvider/restore/{id}": {
      put: {
        description: "Restore custodyProvider",
        operationId: "custodyProviderRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["custodyProvider"],
      },
    },
    "/custodyProviderUpdate/{id}": {
      get: {
        operationId: "custodyProviderGetUpdateRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/custodyProviderGetUpdateResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a custodyProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["custodyProvider"],
      },
    },
    "/customer": {
      get: {
        operationId: "customerListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/customerListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of customer *GENERATE_FRONT_STORE*",
        tags: ["customer"],
      },
      post: {
        operationId: "customerCreateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/CustomerEntity",
            },
            "x-go-name": "Item",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create customer *GENERATE_FRONT_FORM*",
        tags: ["customer"],
      },
      put: {
        operationId: "customerUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/CustomerEntity",
            },
            "x-go-name": "Item",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update customer *GENERATE_FRONT_FORM*",
        tags: ["customer"],
      },
    },
    "/customer/{id}": {
      delete: {
        description: "Delete customer",
        operationId: "customerDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["customer"],
      },
      get: {
        operationId: "customerGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/customerGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a customer from the database by id *GENERATE_FRONT_STORE*",
        tags: ["customer"],
      },
    },
    "/exchangeCryptoParams": {
      get: {
        operationId: "exchangeCryptoParamsListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/exchangeCryptoParamsListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of exchangeCryptoParams*GENERATE_FRONT_STORE*",
        tags: ["exchangeCryptoParams"],
      },
      post: {
        operationId: "exchangeCryptoParamsCreateRequest",
        parameters: [
          {
            description: "Create ExchangeCryptoParams Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/ExchangeCryptoParamsCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create exchangeCryptoParams *GENERATE_FRONT_FORM*",
        tags: ["exchangeCryptoParams"],
      },
      put: {
        operationId: "exchangeCryptoParamsUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/exchangeCryptoParamsEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update ExchangeCryptoParams Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/ExchangeCryptoParamsUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update exchangeCryptoParams *GENERATE_FRONT_FORM*",
        tags: ["exchangeCryptoParams"],
      },
    },
    "/exchangeCryptoParams/{id}": {
      get: {
        operationId: "exchangeCryptoParamsGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/exchangeCryptoParamsGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a exchangeCryptoParams from the database by id *GENERATE_FRONT_STORE*",
        tags: ["exchangeCryptoParams"],
      },
    },
    "/exchangeCryptoParams/delete/{id}": {
      delete: {
        description: "Delete exchangeCryptoParams",
        operationId: "exchangeCryptoParamsDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["exchangeCryptoParams"],
      },
    },
    "/exchangeCryptoParams/restore/{id}": {
      put: {
        description: "Restore exchangeCryptoParams",
        operationId: "exchangeCryptoParamsRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["exchangeCryptoParams"],
      },
    },
    "/exchangeProvider": {
      get: {
        operationId: "exchangeProviderListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/exchangeProviderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of exchangeProvider*GENERATE_FRONT_STORE*",
        tags: ["exchangeProvider"],
      },
      post: {
        operationId: "exchangeProviderCreateRequest",
        parameters: [
          {
            description: "Create ExchangeProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/ExchangeProviderCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create exchangeProvider *GENERATE_FRONT_FORM*",
        tags: ["exchangeProvider"],
      },
      put: {
        operationId: "exchangeProviderUpdateRequest",
        parameters: [
          {
            description: "Update ExchangeProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/ExchangeProviderUpdateEntity",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update exchangeProvider *GENERATE_FRONT_FORM*",
        tags: ["exchangeProvider"],
      },
    },
    "/exchangeProvider/{id}": {
      get: {
        operationId: "exchangeProviderGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/exchangeProviderGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a exchangeProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["exchangeProvider"],
      },
    },
    "/exchangeProvider/delete/{id}": {
      delete: {
        description: "Delete exchangeProvider",
        operationId: "exchangeProviderDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["exchangeProvider"],
      },
    },
    "/exchangeProvider/restore/{id}": {
      put: {
        description: "Restore exchangeProvider",
        operationId: "exchangeProviderRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["exchangeProvider"],
      },
    },
    "/exchangeProviderUpdate/{id}": {
      get: {
        operationId: "exchangeProviderGetUpdateRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/exchangeProviderGetUpdateResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a exchangeProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["exchangeProvider"],
      },
    },
    "/fiat": {
      get: {
        operationId: "fiatListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/fiatListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of fiat *GENERATE_FRONT_STORE*",
        tags: ["fiat"],
      },
      post: {
        operationId: "fiatCreateRequest",
        parameters: [
          {
            description: "Create fiat item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/FiatCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create fiat *GENERATE_FRONT_FORM*",
        tags: ["fiat"],
      },
      put: {
        operationId: "fiatUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/fiatEntity",
            },
            "x-go-name": "Item",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update fiat *GENERATE_FRONT_FORM*",
        tags: ["fiat"],
      },
    },
    "/fiat/{id}": {
      get: {
        operationId: "fiatGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/fiatGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Return a fiat from the database by id *GENERATE_FRONT_STORE*",
        tags: ["fiat"],
      },
    },
    "/fiat/delete/{id}": {
      delete: {
        description: "Delete fiat",
        operationId: "fiatDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["fiat"],
      },
    },
    "/fiat/restore/{id}": {
      put: {
        description: "Restore fiat",
        operationId: "fiatRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["fiat"],
      },
    },
    "/fiatProvider": {
      get: {
        operationId: "fiatProviderListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/fiatProviderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of fiatProvider*GENERATE_FRONT_STORE*",
        tags: ["fiatProvider"],
      },
      post: {
        operationId: "fiatProviderCreateRequest",
        parameters: [
          {
            description: "Create FiatProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/FiatProviderCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create fiatProvider *GENERATE_FRONT_FORM*",
        tags: ["fiatProvider"],
      },
      put: {
        operationId: "fiatProviderUpdateRequest",
        parameters: [
          {
            description: "Update FiatProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/FiatProviderUpdateEntity",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update fiatProvider *GENERATE_FRONT_FORM*",
        tags: ["fiatProvider"],
      },
    },
    "/fiatProvider/{id}": {
      get: {
        operationId: "fiatProviderGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/fiatProviderGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a fiatProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["fiatProvider"],
      },
    },
    "/fiatProvider/delete/{id}": {
      delete: {
        description: "Delete fiatProvider",
        operationId: "fiatProviderDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["fiatProvider"],
      },
    },
    "/fiatProvider/restore/{id}": {
      put: {
        description: "Restore fiatProvider",
        operationId: "fiatProviderRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["fiatProvider"],
      },
    },
    "/fiatProviderUpdate/{id}": {
      get: {
        operationId: "fiatProviderGetUpdateRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/fiatProviderGetUpdateResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a fiatProvider for update from the database by id *GENERATE_FRONT_STORE*",
        tags: ["fiatProvider"],
      },
    },
    "/fiatRate": {
      get: {
        operationId: "fiatRateListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/fiatRateListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of fiatRate *GENERATE_FRONT_STORE*",
        tags: ["fiatRate"],
      },
    },
    "/host": {
      get: {
        operationId: "hostListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
          {
            description: "in: param",
            format: "uint32",
            in: "query",
            name: "merchant_id",
            type: "integer",
            "x-go-name": "MerchantId",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/hostListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of host *GENERATE_FRONT_STORE*",
        tags: ["host"],
      },
      post: {
        operationId: "hostCreateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/hostEntity",
            },
            "x-go-name": "Item",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create host *GENERATE_FRONT_FORM*",
        tags: ["host"],
      },
      put: {
        operationId: "hostUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/hostEntity",
            },
            "x-go-name": "Item",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update host *GENERATE_FRONT_FORM*",
        tags: ["host"],
      },
    },
    "/host/{id}": {
      get: {
        operationId: "hostGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/hostGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Return a host from the database by id *GENERATE_FRONT_STORE*",
        tags: ["host"],
      },
    },
    "/host/delete/{id}": {
      delete: {
        description: "Delete host",
        operationId: "hostDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["host"],
      },
    },
    "/host/restore/{id}": {
      put: {
        description: "Restore host",
        operationId: "hostRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["host"],
      },
    },
    "/hosts_all": {
      get: {
        description: "Get list of hosts",
        operationId: "hostAllListRequest",
        responses: {
          "200": {
            $ref: "#/responses/hostAllListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        tags: ["host"],
      },
    },
    "/internalProvider": {
      get: {
        operationId: "internalProviderListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/internalProviderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of internalProvider*GENERATE_FRONT_STORE*",
        tags: ["internalProvider"],
      },
      post: {
        operationId: "internalProviderCreateRequest",
        parameters: [
          {
            description: "Create InternalProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/InternalProviderCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create internalProvider *GENERATE_FRONT_FORM*",
        tags: ["internalProvider"],
      },
      put: {
        operationId: "internalProviderUpdateRequest",
        parameters: [
          {
            description: "Update InternalProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/InternalProviderUpdateEntity",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update internalProvider *GENERATE_FRONT_FORM*",
        tags: ["internalProvider"],
      },
    },
    "/internalProvider/{id}": {
      get: {
        operationId: "internalProviderGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/internalProviderGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a internalProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["internalProvider"],
      },
    },
    "/internalProvider/delete/{id}": {
      delete: {
        description: "Delete internalProvider",
        operationId: "internalProviderDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["internalProvider"],
      },
    },
    "/internalProvider/restore/{id}": {
      put: {
        description: "Restore internalProvider",
        operationId: "internalProviderRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["internalProvider"],
      },
    },
    "/internalProviderUpdate/{id}": {
      get: {
        operationId: "internalProviderGetUpdateRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/internalProviderGetUpdateResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a internalProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["internalProvider"],
      },
    },
    "/internalWallet": {
      get: {
        operationId: "internalWalletListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/internalWalletListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of internalWallet*GENERATE_FRONT_STORE*",
        tags: ["internalWallet"],
      },
      post: {
        operationId: "internalWalletCreateRequest",
        parameters: [
          {
            description: "Create InternalWallet Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/InternalWalletCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create internalWallet *GENERATE_FRONT_FORM*",
        tags: ["internalWallet"],
      },
      put: {
        operationId: "internalWalletUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/internalWalletEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update InternalWallet Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/InternalWalletUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update internalWallet *GENERATE_FRONT_FORM*",
        tags: ["internalWallet"],
      },
    },
    "/internalWallet/{id}": {
      get: {
        operationId: "internalWalletGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/internalWalletGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a internalWallet from the database by id *GENERATE_FRONT_STORE*",
        tags: ["internalWallet"],
      },
    },
    "/internalWallet/delete/{id}": {
      delete: {
        description: "Delete internalWallet",
        operationId: "internalWalletDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["internalWallet"],
      },
    },
    "/internalWallet/restore/{id}": {
      put: {
        description: "Restore internalWallet",
        operationId: "internalWalletRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["internalWallet"],
      },
    },
    "/kycProvider": {
      get: {
        operationId: "kycProviderListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/kycProviderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of kycProvider*GENERATE_FRONT_STORE*",
        tags: ["kycProvider"],
      },
      post: {
        operationId: "kycProviderCreateRequest",
        parameters: [
          {
            description: "Create KycProvider Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/KycProviderCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create kycProvider *GENERATE_FRONT_FORM*",
        tags: ["kycProvider"],
      },
      put: {
        operationId: "kycProviderUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/kycProviderEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update KycProvider Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/KycProviderUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update kycProvider *GENERATE_FRONT_FORM*",
        tags: ["kycProvider"],
      },
    },
    "/kycProvider/{id}": {
      get: {
        operationId: "kycProviderGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/kycProviderGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a kycProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["kycProvider"],
      },
    },
    "/kycProvider/delete/{id}": {
      delete: {
        description: "Delete kycProvider",
        operationId: "kycProviderDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["kycProvider"],
      },
    },
    "/kycProvider/restore/{id}": {
      put: {
        description: "Restore kycProvider",
        operationId: "kycProviderRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["kycProvider"],
      },
    },
    "/kytProvider": {
      get: {
        operationId: "kytProviderListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/kytProviderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of kytProvider*GENERATE_FRONT_STORE*",
        tags: ["kytProvider"],
      },
      post: {
        operationId: "kytProviderCreateRequest",
        parameters: [
          {
            description: "Create KytProvider Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/KytProviderCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create kytProvider *GENERATE_FRONT_FORM*",
        tags: ["kytProvider"],
      },
      put: {
        operationId: "kytProviderUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/kytProviderEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update KytProvider Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/KytProviderUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update kytProvider *GENERATE_FRONT_FORM*",
        tags: ["kytProvider"],
      },
    },
    "/kytProvider/{id}": {
      get: {
        operationId: "kytProviderGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/kytProviderGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a kytProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["kytProvider"],
      },
    },
    "/kytProvider/delete/{id}": {
      delete: {
        description: "Delete kytProvider",
        operationId: "kytProviderDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["kytProvider"],
      },
    },
    "/kytProvider/restore/{id}": {
      put: {
        description: "Restore kytProvider",
        operationId: "kytProviderRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["kytProvider"],
      },
    },
    "/merchant": {
      get: {
        operationId: "merchantListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/merchantListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of merchant *GENERATE_FRONT_STORE*",
        tags: ["merchant"],
      },
      post: {
        operationId: "merchantCreateRequest",
        parameters: [
          {
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/MerchantCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create merchant *GENERATE_FRONT_FORM*",
        tags: ["merchant"],
      },
      put: {
        operationId: "merchantUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/MerchantUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update merchant *GENERATE_FRONT_FORM*",
        tags: ["merchant"],
      },
    },
    "/merchant/{id}": {
      get: {
        operationId: "merchantGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/merchantGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a merchant from the database by id *GENERATE_FRONT_STORE*",
        tags: ["merchant"],
      },
    },
    "/merchant/delete/{id}": {
      delete: {
        description: "Delete merchant",
        operationId: "merchantDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["merchant"],
      },
    },
    "/merchant/restore/{id}": {
      put: {
        description: "Restore merchant",
        operationId: "merchantRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["merchant"],
      },
    },
    "/merchantsSymbols": {
      get: {
        operationId: "merchantsSymbolsListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/merchantsSymbolsListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of merchantsSymbols *GENERATE_FRONT_STORE*",
        tags: ["merchantsSymbols"],
      },
      post: {
        operationId: "merchantsSymbolsCreateRequest",
        parameters: [
          {
            description: "Create MerchantsSymbols Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/MerchantsSymbolsCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create merchantsSymbols *GENERATE_FRONT_FORM*",
        tags: ["merchantsSymbols"],
      },
      put: {
        operationId: "merchantsSymbolsUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/merchantsSymbolsEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update MerchantsSymbols Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/MerchantsSymbolsUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update merchantsSymbols *GENERATE_FRONT_FORM*",
        tags: ["merchantsSymbols"],
      },
    },
    "/merchantsSymbols/{id}": {
      get: {
        operationId: "merchantsSymbolsGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/merchantsSymbolsGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a merchantsSymbols from the database by id *GENERATE_FRONT_STORE*",
        tags: ["merchantsSymbols"],
      },
    },
    "/merchantsSymbols/delete/{id}": {
      delete: {
        description: "Delete merchantsSymbols",
        operationId: "merchantsSymbolsDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["merchantsSymbols"],
      },
    },
    "/merchantsSymbols/restore/{id}": {
      put: {
        description: "Restore merchantsSymbols",
        operationId: "merchantsSymbolsRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["merchantsSymbols"],
      },
    },
    "/message": {
      get: {
        operationId: "messageListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/messageListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of message *GENERATE_FRONT_STORE*",
        tags: ["message"],
      },
      post: {
        operationId: "messageCreateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            schema: {
              $ref: "#/definitions/messageEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Create Message Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/MessageCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create message *GENERATE_FRONT_FORM*",
        tags: ["message"],
      },
      put: {
        operationId: "messageUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/messageEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update Message Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/MessageUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update message *GENERATE_FRONT_FORM*",
        tags: ["message"],
      },
    },
    "/message/{id}": {
      get: {
        operationId: "messageGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/messageGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a message from the database by id *GENERATE_FRONT_STORE*",
        tags: ["message"],
      },
    },
    "/message/delete/{id}": {
      delete: {
        description: "Delete message",
        operationId: "messageDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["message"],
      },
    },
    "/message/restore/{id}": {
      put: {
        description: "Restore message",
        operationId: "messageRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["message"],
      },
    },
    "/notificationProvider": {
      get: {
        operationId: "notificationProviderListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/notificationProviderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of notificationProvider *GENERATE_FRONT_STORE*",
        tags: ["notificationProvider"],
      },
      post: {
        operationId: "notificationProviderCreateRequest",
        parameters: [
          {
            description: "Create NotificationProvider Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/NotificationProviderCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create notificationProvider *GENERATE_FRONT_FORM*",
        tags: ["notificationProvider"],
      },
      put: {
        operationId: "notificationProviderUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/notificationProviderEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update NotificationProvider Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/NotificationProviderUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update notificationProvider *GENERATE_FRONT_FORM*",
        tags: ["notificationProvider"],
      },
    },
    "/notificationProvider/{id}": {
      get: {
        operationId: "notificationProviderGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/notificationProviderGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a notificationProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["notificationProvider"],
      },
    },
    "/notificationProvider/delete/{id}": {
      delete: {
        description: "Delete notificationProvider",
        operationId: "notificationProviderDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["notificationProvider"],
      },
    },
    "/notificationProvider/restore/{id}": {
      put: {
        description: "Restore notificationProvider",
        operationId: "notificationProviderRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["notificationProvider"],
      },
    },
    "/payment": {
      get: {
        operationId: "paymentListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/paymentListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of payment*GENERATE_FRONT_STORE*",
        tags: ["payment"],
      },
      post: {
        operationId: "paymentCreateRequest",
        parameters: [
          {
            description: "Create Payment Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/PaymentCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create payment *GENERATE_FRONT_FORM*",
        tags: ["payment"],
      },
      put: {
        operationId: "paymentUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/paymentEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update Payment Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/PaymentUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update payment *GENERATE_FRONT_FORM*",
        tags: ["payment"],
      },
    },
    "/payment/{id}": {
      get: {
        operationId: "paymentGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/paymentGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a payment from the database by id *GENERATE_FRONT_STORE*",
        tags: ["payment"],
      },
    },
    "/payment/delete/{id}": {
      delete: {
        description: "Delete payment",
        operationId: "paymentDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["payment"],
      },
    },
    "/payment/restore/{id}": {
      put: {
        description: "Restore payment",
        operationId: "paymentRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["payment"],
      },
    },
    "/paymentProvider": {
      get: {
        operationId: "paymentProviderListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/paymentProviderListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of paymentProvider*GENERATE_FRONT_STORE*",
        tags: ["paymentProvider"],
      },
      post: {
        operationId: "paymentProviderCreateRequest",
        parameters: [
          {
            description: "Create PaymentProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/PaymentProviderCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create paymentProvider *GENERATE_FRONT_FORM*",
        tags: ["paymentProvider"],
      },
      put: {
        operationId: "paymentProviderUpdateRequest",
        parameters: [
          {
            description: "Update PaymentProvider Request",
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/PaymentProviderUpdateEntity",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update paymentProvider *GENERATE_FRONT_FORM*",
        tags: ["paymentProvider"],
      },
    },
    "/paymentProvider/{id}": {
      get: {
        operationId: "paymentProviderGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/paymentProviderGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a paymentProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["paymentProvider"],
      },
    },
    "/paymentProvider/delete/{id}": {
      delete: {
        description: "Delete paymentProvider",
        operationId: "paymentProviderDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["paymentProvider"],
      },
    },
    "/paymentProvider/restore/{id}": {
      put: {
        description: "Restore paymentProvider",
        operationId: "paymentProviderRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["paymentProvider"],
      },
    },
    "/paymentProviderUpdate/{id}": {
      get: {
        operationId: "paymentProviderGetUpdateRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/paymentProviderGetUpdateResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a paymentProvider from the database by id *GENERATE_FRONT_STORE*",
        tags: ["paymentProvider"],
      },
    },
    "/payoutCryptoByAddressParams": {
      get: {
        operationId: "payoutCryptoByAddressParamsListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/payoutCryptoByAddressParamsListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Get list of payoutCryptoByAddressParams*GENERATE_FRONT_STORE*",
        tags: ["payoutCryptoByAddressParams"],
      },
      post: {
        operationId: "payoutCryptoByAddressParamsCreateRequest",
        parameters: [
          {
            description: "Create PayoutCryptoByAddressParams Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/PayoutCryptoByAddressParamsCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create payoutCryptoByAddressParams *GENERATE_FRONT_FORM*",
        tags: ["payoutCryptoByAddressParams"],
      },
      put: {
        operationId: "payoutCryptoByAddressParamsUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/payoutCryptoByAddressParamsEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update PayoutCryptoByAddressParams Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/PayoutCryptoByAddressParamsUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update payoutCryptoByAddressParams *GENERATE_FRONT_FORM*",
        tags: ["payoutCryptoByAddressParams"],
      },
    },
    "/payoutCryptoByAddressParams/{id}": {
      get: {
        operationId: "payoutCryptoByAddressParamsGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/payoutCryptoByAddressParamsGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a payoutCryptoByAddressParams from the database by id *GENERATE_FRONT_STORE*",
        tags: ["payoutCryptoByAddressParams"],
      },
    },
    "/payoutCryptoByAddressParams/delete/{id}": {
      delete: {
        description: "Delete payoutCryptoByAddressParams",
        operationId: "payoutCryptoByAddressParamsDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["payoutCryptoByAddressParams"],
      },
    },
    "/payoutCryptoByAddressParams/restore/{id}": {
      put: {
        description: "Restore payoutCryptoByAddressParams",
        operationId: "payoutCryptoByAddressParamsRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["payoutCryptoByAddressParams"],
      },
    },
    "/providersSymbols": {
      get: {
        operationId: "providersSymbolsListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/providersSymbolsListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of providersSymbols *GENERATE_FRONT_STORE*",
        tags: ["providersSymbols"],
      },
      post: {
        operationId: "providersSymbolsCreateRequest",
        parameters: [
          {
            description: "Create ProvidersSymbols Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/ProvidersSymbolsCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create providersSymbols *GENERATE_FRONT_FORM*",
        tags: ["providersSymbols"],
      },
      put: {
        operationId: "providersSymbolsUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/providersSymbolsEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update ProvidersSymbols Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/ProvidersSymbolsUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update providersSymbols *GENERATE_FRONT_FORM*",
        tags: ["providersSymbols"],
      },
    },
    "/providersSymbols/{id}": {
      get: {
        operationId: "providersSymbolsGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/providersSymbolsGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a providersSymbols from the database by id *GENERATE_FRONT_STORE*",
        tags: ["providersSymbols"],
      },
    },
    "/providersSymbols/delete/{id}": {
      delete: {
        description: "Delete providersSymbols",
        operationId: "providersSymbolsDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["providersSymbols"],
      },
    },
    "/providersSymbols/restore/{id}": {
      put: {
        description: "Restore providersSymbols",
        operationId: "providersSymbolsRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["providersSymbols"],
      },
    },
    "/room": {
      get: {
        operationId: "roomListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/roomListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of room *GENERATE_FRONT_STORE*",
        tags: ["room"],
      },
      post: {
        operationId: "roomCreateRequest",
        parameters: [
          {
            description: "Create Room Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/RoomCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create room *GENERATE_FRONT_FORM*",
        tags: ["room"],
      },
      put: {
        operationId: "roomUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/roomEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update Room Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/RoomUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update room *GENERATE_FRONT_FORM*",
        tags: ["room"],
      },
    },
    "/room/{id}": {
      get: {
        operationId: "roomGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/roomGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Return a room from the database by id *GENERATE_FRONT_STORE*",
        tags: ["room"],
      },
    },
    "/room/delete/{id}": {
      delete: {
        description: "Delete room",
        operationId: "roomDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["room"],
      },
    },
    "/room/restore/{id}": {
      put: {
        description: "Restore room",
        operationId: "roomRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["room"],
      },
    },
    "/sendLog": {
      get: {
        operationId: "sendLogListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/sendLogListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of sendLog *GENERATE_FRONT_STORE*",
        tags: ["sendLog"],
      },
      post: {
        operationId: "sendLogCreateRequest",
        parameters: [
          {
            description: "Create SendLog Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/SendLogCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create sendLog *GENERATE_FRONT_FORM*",
        tags: ["sendLog"],
      },
    },
    "/sendLog/{id}": {
      get: {
        operationId: "sendLogGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/sendLogGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a sendLog from the database by id *GENERATE_FRONT_STORE*",
        tags: ["sendLog"],
      },
    },
    "/signin": {
      post: {
        operationId: "userSignInRequest",
        parameters: [
          {
            in: "body",
            name: "Body",
            schema: {
              $ref: "#/definitions/UserSignInRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/userSignInResponse",
          },
          "400": {
            $ref: "#/responses/errorResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        summary: "Sign in user by credential and domain *GENERATE_FRONT_FORM*",
        tags: ["user"],
      },
    },
    "/subdivision": {
      get: {
        operationId: "subdivisionListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/subdivisionListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of subdivision*GENERATE_FRONT_STORE*",
        tags: ["subdivision"],
      },
      post: {
        operationId: "subdivisionCreateRequest",
        parameters: [
          {
            description: "Create Subdivision Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/SubdivisionCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create subdivision *GENERATE_FRONT_FORM*",
        tags: ["subdivision"],
      },
      put: {
        operationId: "subdivisionUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/subdivisionEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update Subdivision Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/SubdivisionUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update subdivision *GENERATE_FRONT_FORM*",
        tags: ["subdivision"],
      },
    },
    "/subdivision/{id}": {
      get: {
        operationId: "subdivisionGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/subdivisionGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a subdivision from the database by id *GENERATE_FRONT_STORE*",
        tags: ["subdivision"],
      },
    },
    "/subdivision/delete/{id}": {
      delete: {
        description: "Delete subdivision",
        operationId: "subdivisionDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["subdivision"],
      },
    },
    "/subdivision/restore/{id}": {
      put: {
        description: "Restore subdivision",
        operationId: "subdivisionRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["subdivision"],
      },
    },
    "/template": {
      get: {
        operationId: "templateListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/templateListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of template *GENERATE_FRONT_STORE*",
        tags: ["template"],
      },
      post: {
        operationId: "templateCreateRequest",
        parameters: [
          {
            description: "Create Template Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/TemplateCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create template *GENERATE_FRONT_FORM*",
        tags: ["template"],
      },
      put: {
        operationId: "templateUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/templateEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update Template Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/TemplateUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update template *GENERATE_FRONT_FORM*",
        tags: ["template"],
      },
    },
    "/template/{id}": {
      get: {
        operationId: "templateGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/templateGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary:
          "Return a template from the database by id *GENERATE_FRONT_STORE*",
        tags: ["template"],
      },
    },
    "/template/delete/{id}": {
      delete: {
        description: "Delete template",
        operationId: "templateDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["template"],
      },
    },
    "/template/restore/{id}": {
      put: {
        description: "Restore template",
        operationId: "templateRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["template"],
      },
    },
    "/user": {
      get: {
        operationId: "userListRequest",
        parameters: [
          {
            format: "int64",
            in: "query",
            name: "skip",
            type: "integer",
            "x-go-name": "Skip",
          },
          {
            format: "int64",
            in: "query",
            name: "limit",
            type: "integer",
            "x-go-name": "Limit",
          },
          {
            in: "query",
            name: "query",
            type: "string",
            "x-go-name": "Query",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/userListResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Get list of user *GENERATE_FRONT_STORE*",
        tags: ["user"],
      },
      post: {
        operationId: "userCreateRequest",
        parameters: [
          {
            description: "Create User Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/UserCreateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Create user *GENERATE_FRONT_FORM*",
        tags: ["user"],
      },
      put: {
        operationId: "userUpdateRequest",
        parameters: [
          {
            in: "body",
            name: "item",
            required: true,
            schema: {
              $ref: "#/definitions/userEntity",
            },
            "x-go-name": "Item",
          },
          {
            description: "Update User Item",
            in: "body",
            name: "Item",
            schema: {
              $ref: "#/definitions/UserUpdateRequest",
            },
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Update user *GENERATE_FRONT_FORM*",
        tags: ["user"],
      },
    },
    "/user/{id}": {
      get: {
        operationId: "userGetRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/userGetResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        summary: "Return a user from the database by id *GENERATE_FRONT_STORE*",
        tags: ["user"],
      },
    },
    "/user/delete/{id}": {
      delete: {
        description: "Delete user",
        operationId: "userDeleteRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["user"],
      },
    },
    "/user/restore/{id}": {
      put: {
        description: "Restore user",
        operationId: "userRestoreRequest",
        parameters: [
          {
            format: "uint32",
            in: "path",
            name: "id",
            required: true,
            type: "integer",
            "x-go-name": "Id",
          },
        ],
        responses: {
          "200": {
            $ref: "#/responses/commentedResponse",
          },
          "403": {
            $ref: "#/responses/errorResponse",
          },
          "422": {
            $ref: "#/responses/errorValidation",
          },
          "500": {
            $ref: "#/responses/errorResponse",
          },
        },
        security: [
          {
            Bearer: [],
          },
        ],
        tags: ["user"],
      },
    },
  },
  produces: ["application/json"],
  responses: {
    addExistsCardParamsGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/addExistsCardParamsEntity",
      },
    },
    addExistsCardParamsListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/AddExistsCardParamsListResponse",
      },
    },
    assetPairGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/assetPairEntity",
      },
    },
    assetPairListResponse: {
      description: "additions",
      schema: {
        $ref: "#/definitions/AssetPairListResponse",
      },
    },
    availableOperationsListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/AvailableOperationsListResponse",
      },
    },
    availableProviderListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/AvailableProviderListResponse",
      },
    },
    buyCryptoByCardParamsByMerchantForCustomerResponse: {
      description: "",
      schema: {
        $ref:
          "#/definitions/BuyCryptoByCardParamsByMerchantForCustomerResponse",
      },
    },
    buyCryptoByCardParamsByMerchantResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/BuyCryptoByCardParamsByMerchantResponse",
      },
    },
    buyCryptoByCardParamsGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/buyCryptoByCardParamsEntity",
      },
    },
    buyCryptoByCardParamsListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/BuyCryptoByCardParamsListResponse",
      },
    },
    buyCryptoBySkrillParamsByMerchantForCustomerResponse: {
      description: "",
      schema: {
        $ref:
          "#/definitions/BuyCryptoBySkrillParamsByMerchantForCustomerResponse",
      },
    },
    buyCryptoBySkrillParamsByMerchantResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/BuyCryptoBySkrillParamsByMerchantResponse",
      },
    },
    buyCryptoBySkrillParamsGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/buyCryptoBySkrillParamsEntity",
      },
    },
    buyCryptoBySkrillParamsListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/BuyCryptoBySkrillParamsListResponse",
      },
    },
    cardGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/cardEntity",
      },
    },
    cardListResponse: {
      description: "additions",
      schema: {
        $ref: "#/definitions/CardListResponse",
      },
    },
    cardOrderGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/cardOrderEntity",
      },
    },
    cardOrderListResponse: {
      description: "additions",
      schema: {
        $ref: "#/definitions/CardOrderListResponse",
      },
    },
    cardProviderGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/cardProviderEntity",
      },
    },
    cardProviderGetUpdateResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/cardProviderEntity",
      },
    },
    cardProviderListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/CardProviderListResponse",
      },
    },
    commentedResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/CommentedResponse",
      },
    },
    counterpartGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/counterpartEntity",
      },
    },
    counterpartListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/CounterpartListResponse",
      },
    },
    cryptoGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/cryptoEntity",
      },
    },
    cryptoGetUpdateResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/cryptoEntity",
      },
    },
    cryptoListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/CryptoListResponse",
      },
    },
    currencyGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/currencyEntity",
      },
    },
    currencyListResponse: {
      description: "additions",
      schema: {
        $ref: "#/definitions/CurrencyListResponse",
      },
    },
    currencyPriceGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/currencyPriceEntity",
      },
    },
    currencyPriceListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/CurrencyPriceListResponse",
      },
    },
    custodyProviderGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/custodyProviderEntity",
      },
    },
    custodyProviderGetUpdateResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/custodyProviderEntity",
      },
    },
    custodyProviderListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/CustodyProviderListResponse",
      },
    },
    customerGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/CustomerEntity",
      },
    },
    customerListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/CustomerListResponse",
      },
    },
    customerProfileResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/customerProfileEntity",
      },
    },
    errorResponse: {
      description: "",
      schema: {
        type: "object",
      },
    },
    errorValidation: {
      description: "",
      schema: {
        type: "object",
      },
    },
    exchangeCryptoParamsByMerchantForCustomerResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/ExchangeCryptoParamsByMerchantForCustomerResponse",
      },
    },
    exchangeCryptoParamsGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/exchangeCryptoParamsEntity",
      },
    },
    exchangeCryptoParamsListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/ExchangeCryptoParamsListResponse",
      },
    },
    exchangeProviderGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/exchangeProviderEntity",
      },
    },
    exchangeProviderGetUpdateResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/exchangeProviderEntity",
      },
    },
    exchangeProviderListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/ExchangeProviderListResponse",
      },
    },
    fiatGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/fiatEntity",
      },
    },
    fiatListForCustomerResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/FiatListForCustomerResponse",
      },
    },
    fiatListResponse: {
      description: "additions",
      schema: {
        $ref: "#/definitions/FiatListResponse",
      },
    },
    fiatProviderGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/fiatProviderEntity",
      },
    },
    fiatProviderGetUpdateResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/FiatProviderUpdateEntity",
      },
    },
    fiatProviderListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/FiatProviderListResponse",
      },
    },
    fiatRateGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/fiatRateEntity",
      },
    },
    fiatRateListResponse: {
      description: "additions",
      schema: {
        $ref: "#/definitions/FiatRateListResponse",
      },
    },
    hostGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/hostEntity",
      },
    },
    hostInfoGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/hostInfo",
      },
    },
    hostListResponse: {
      description: "additions",
      schema: {
        $ref: "#/definitions/HostListResponse",
      },
    },
    internalProviderGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/internalProviderEntity",
      },
    },
    internalProviderGetUpdateResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/InternalProviderUpdateEntity",
      },
    },
    internalProviderListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/InternalProviderListResponse",
      },
    },
    internalWalletCustomerListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/InternalWalletCustomerListResponse",
      },
    },
    internalWalletGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/internalWalletEntity",
      },
    },
    internalWalletListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/InternalWalletListResponse",
      },
    },
    kycProviderGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/kycProviderEntity",
      },
    },
    kycProviderListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/KycProviderListResponse",
      },
    },
    kytProviderGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/kytProviderEntity",
      },
    },
    kytProviderListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/KytProviderListResponse",
      },
    },
    merchantGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/MerchantGetResponse",
      },
    },
    merchantListResponse: {
      description: "additions",
      schema: {
        $ref: "#/definitions/MerchantListResponse",
      },
    },
    merchantsSymbolsGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/merchantsSymbolsEntity",
      },
    },
    merchantsSymbolsListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/MerchantsSymbolsListResponse",
      },
    },
    messageGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/messageEntity",
      },
    },
    messageListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/MessageListResponse",
      },
    },
    notificationProviderGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/notificationProviderEntity",
      },
    },
    notificationProviderListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/NotificationProviderListResponse",
      },
    },
    paymentGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/paymentEntity",
      },
    },
    paymentListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/PaymentListResponse",
      },
    },
    paymentProviderGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/paymentProviderEntity",
      },
    },
    paymentProviderGetUpdateResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/PaymentProviderUpdateEntity",
      },
    },
    paymentProviderListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/PaymentProviderListResponse",
      },
    },
    payoutCryptoByAddressParamsByMerchantForCustomerResponse: {
      description: "",
      schema: {
        $ref:
          "#/definitions/PayoutCryptoByAddressParamsByMerchantForCustomerResponse",
      },
    },
    payoutCryptoByAddressParamsGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/payoutCryptoByAddressParamsEntity",
      },
    },
    payoutCryptoByAddressParamsListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/PayoutCryptoByAddressParamsListResponse",
      },
    },
    payoutCryptoToCardParamsByMerchantForCustomerResponse: {
      description: "",
      schema: {
        $ref:
          "#/definitions/PayoutCryptoToCardParamsByMerchantForCustomerResponse",
      },
    },
    payoutCryptoToCardParamsByMerchantResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/PayoutCryptoToCardParamsByMerchantResponse",
      },
    },
    payoutCryptoToCardParamsGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/payoutCryptoToCardParamsEntity",
      },
    },
    payoutCryptoToCardParamsListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/PayoutCryptoToCardParamsListResponse",
      },
    },
    providersSymbolsGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/providersSymbolsEntity",
      },
    },
    providersSymbolsListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/ProvidersSymbolsListResponse",
      },
    },
    roomGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/roomEntity",
      },
    },
    roomListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/RoomListResponse",
      },
    },
    sendLogGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/sendLogEntity",
      },
    },
    sendLogListResponse: {
      description: "additions",
      schema: {
        $ref: "#/definitions/SendLogListResponse",
      },
    },
    subdivisionGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/subdivisionEntity",
      },
    },
    subdivisionListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/SubdivisionListResponse",
      },
    },
    templateGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/templateEntity",
      },
    },
    templateListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/TemplateListResponse",
      },
    },
    userGetResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/userEntity",
      },
    },
    userListResponse: {
      description: "",
      schema: {
        $ref: "#/definitions/UserListResponse",
      },
    },
  },
  schemes: ["https"],
  securityDefinitions: {
    Bearer: {
      in: "header",
      name: "Authorization",
      type: "apiKey",
      "x-go-name": "Bearer",
    },
  },
  swagger: "2.0",
};
const { code, hooks, type, funcs } = generator(swaggerJson as any, {
  dir: "",
  effectorFuncs: true,
});

console.log(funcs);
