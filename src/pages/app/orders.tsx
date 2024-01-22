import MainLayout from "~/components/main-layout";
import { useQuery } from "urql";
import {
  type GetOrdersQuery,
  type GetOrdersQueryVariables,
} from "~/generated/graphql";
import OrdersTable from "~/components/orders/OrdersTable";
import { GET_ORDERS_OVERVIEW } from "~/graphql/queries/orders";

const OrdersPage = () => {
  const [ordersQuery, refetch] = useQuery<
    GetOrdersQuery,
    GetOrdersQueryVariables
  >({
    query: GET_ORDERS_OVERVIEW,
  });
  return (
    <MainLayout pageName="Products">
      <OrdersTable orders={ordersQuery.data?.orders} />
    </MainLayout>
  );
};

export default OrdersPage;
