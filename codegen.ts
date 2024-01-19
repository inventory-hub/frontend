import { type CodegenConfig } from "@graphql-codegen/cli";

const adminSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET || "admin-key";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {
          "x-hasura-role": "admin",
          "x-hasura-admin-secret": adminSecret,
        },
      },
    },
  ],
  documents: ["./src/**/*.(ts|tsx)", "!src/generated/**"],
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
