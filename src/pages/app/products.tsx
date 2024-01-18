import { useRouter } from "next/router";
import MainLayout from "~/components/main-layout";
import UserSearch from "~/components/team/UserSearch";
import UserTable from "~/components/team/UserTable";
import UserTableControls from "~/components/team/UserTableControls";
import { getUsers } from "~/services/user-service";
import { useQuery } from "urql";
import { GET_PRODUCTS_OVERVIEW } from "~/graphql/queries/products";

const ProductsPage = () => {
  const router = useRouter();
  const { search } = router.query;
  const [productsQuery, refetch] = useQuery({
    query: GET_PRODUCTS_OVERVIEW,
  });
  console.log(productsQuery.data);
  return (
    <MainLayout pageName="Products" headerContent={<UserSearch />}>
      <UserTableControls />
      {/* <UserTable users={usersQuery.data?.users ?? []} /> */}
    </MainLayout>
  );
};

export default ProductsPage;
