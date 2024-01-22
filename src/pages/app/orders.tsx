import MainLayout from "~/components/main-layout";
import { useQuery } from "urql";
import { gql } from "graphql-request";

import {
  type GetOrdersQuery,
  type GetOrdersQueryVariables,
} from "~/generated/graphql";
import OrdersTable from "~/components/orders/OrdersTable";
import HeaderSearch from "~/components/team/HeaderSearch";
import { useRouter } from "next/router";

const GET_ORDERS_OVERVIEW = gql`
  query GetOrders($search: String = "%%") {
    orders(where: { client_name: { _ilike: $search } }) {
      id
      created_at
      updated_at
      state
      client_name
      orders_items {
        product {
          id
          name
          imageUrl
          hash_name
          quantity
        }
      }
    }
  }
`;

const OrdersPage = () => {
  const router = useRouter();
  const search = Array.isArray(router.query.search)
    ? ""
    : router.query.search ?? "";
  const [ordersQuery, refetch] = useQuery<
    GetOrdersQuery,
    GetOrdersQueryVariables
  >({
    query: GET_ORDERS_OVERVIEW,
    variables: {
      search: `%${search}%`,
    },
  });
  return (
    <MainLayout
      pageName="Orders"
      headerContent={<HeaderSearch placeholder="Search by client" />}
    >
      <OrdersTable orders={ordersQuery.data?.orders} />
    </MainLayout>
  );
};

export default OrdersPage;
