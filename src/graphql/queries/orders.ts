import { gql } from "graphql-request";

export const GET_ORDERS_OVERVIEW = gql`
  query GetOrders {
    orders {
      id
      created_at
      updated_at
      state
      orders_items {
        product {
          id
          name
          imageUrl
          hash_name
        }
        count
      }
    }
  }
`;
