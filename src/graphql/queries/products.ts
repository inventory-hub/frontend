import { gql } from "graphql-request";

export const GET_PRODUCTS_OVERVIEW = gql`
  query GetProductsOverview {
    products {
      id
      name
      description
      category {
        name
      }
      imageUrl
      quantity
      hash_name
    }
  }
`;
