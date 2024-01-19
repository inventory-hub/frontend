import { type RequestDocument, request } from "graphql-request";

type Variables = Record<string, unknown>;

export const graphqlRequest = <T, V extends Variables = Variables>(
  document: RequestDocument,
  variables: V | undefined = undefined
): Promise<T> =>
  request({
    url: process.env.HASURA_API_ENDPOINT!,
    document,
    variables,
    requestHeaders: {
      "content-type": "application/json",
      "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
    },
  });
