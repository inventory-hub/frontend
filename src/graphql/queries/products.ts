import { gql } from "graphql-request";

export const GET_PRODUCTS_OVERVIEW = gql`
  query GetProducts {
    products {
      id
      name
      description
      category {
        name
      }
      imageUrl
    }
  }
`;
