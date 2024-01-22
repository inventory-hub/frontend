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
import OrderTableControls from "~/components/orders/OrderTableControls";
import { useOrdersFiltersStore } from "~/stores/orders-filters-store";

const GET_ORDERS_OVERVIEW = gql`
  query GetOrders($search: String = "%%", $states: [order_states_enum!]!) {
    orders(
      where: { client_name: { _ilike: $search }, state: { _in: $states } }
    ) {
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
  const states = useOrdersFiltersStore(({ states }) => states);
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
      states,
    },
  });
  return (
    <MainLayout
      pageName="Orders"
      headerContent={<HeaderSearch placeholder="Search by client" />}
    >
      <OrderTableControls refetchOrders={refetch} />
      <OrdersTable orders={ordersQuery.data?.orders} />
    </MainLayout>
  );
};

export default OrdersPage;
