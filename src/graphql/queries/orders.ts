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
          name
          imageUrl
        }
        count
      }
    }
  }
`;
