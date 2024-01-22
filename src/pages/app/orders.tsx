import { useRouter } from "next/router";
import { gql } from "graphql-request";
import { useQuery } from "urql";

import MainLayout from "~/components/main-layout";
import HeaderSearch from "~/components/team/HeaderSearch";
import {
  type GetOrdersTableQuery,
  type GetOrdersTableQueryVariables,
} from "~/generated/graphql";

const GET_ORDERS_TABLE_QUERY = gql`
  query GetOrdersTable($search: String) {
    orders(
      where: { client_name: { _ilike: $search } }
      order_by: { updated_at: desc }
    ) {
      id
      client_name
      created_at
      state
      orders_items {
        product {
          name
          imageUrl
        }
      }
    }
  }
`;

const TeamPage = () => {
  const router = useRouter();
  const search = Array.isArray(router.query.search)
    ? ""
    : router.query.search ?? "";
  const [{ data }] = useQuery<
    GetOrdersTableQuery,
    GetOrdersTableQueryVariables
  >({
    query: GET_ORDERS_TABLE_QUERY,
    variables: {
      search: `%${search}%`,
    },
  });

  return (
    <MainLayout
      pageName="Team"
      headerContent={<HeaderSearch placeholder="Search by client" />}
    >
      ...
    </MainLayout>
  );
};

export default TeamPage;
