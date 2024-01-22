import { useRouter } from "next/router";
import { gql } from "graphql-request";
import { useQuery } from "urql";

import MainLayout from "~/components/main-layout";
import HeaderSearch from "~/components/team/HeaderSearch";
import UserTable from "~/components/team/UserTable";
import UserTableControls from "~/components/team/UserTableControls";
import {
  type GetUsersTableQuery,
  type GetUsersTableQueryVariables,
} from "~/generated/graphql";

const GET_USERS_TABLE_QUERY = gql`
  query GetUsersTable($search: String) {
    users(
      where: {
        _or: [
          { name: { _ilike: $search } }
          { email: { _ilike: $search } }
          { full_name: { _ilike: $search } }
        ]
      }
    ) {
      id
      name
      email
      role
      full_name
      created_at
      deleted_at
    }
  }
`;

const TeamPage = () => {
  const router = useRouter();
  const search = Array.isArray(router.query.search)
    ? ""
    : router.query.search ?? "";
  const [{ data }] = useQuery<GetUsersTableQuery, GetUsersTableQueryVariables>({
    query: GET_USERS_TABLE_QUERY,
    variables: {
      search: `%${search}%`,
    },
  });

  return (
    <MainLayout
      pageName="Team"
      headerContent={<HeaderSearch placeholder="Search for someone" />}
    >
      <UserTableControls />
      <UserTable users={data?.users ?? []} />
    </MainLayout>
  );
};

export default TeamPage;
