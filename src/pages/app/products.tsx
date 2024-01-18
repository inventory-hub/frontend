import { useRouter } from "next/router";
import MainLayout from "~/components/main-layout";
import UserSearch from "~/components/team/UserSearch";
import UserTable from "~/components/team/UserTable";
import UserTableControls from "~/components/team/UserTableControls";
import { getUsers } from "~/services/user-service";
import { useQuery } from "urql";
import { GET_PRODUCTS_OVERVIEW } from "~/graphql/queries/products";
import {
  type GetProductsOverviewQuery,
  type GetProductsOverviewQueryVariables,
} from "~/generated/graphql";
import ProductsTable from "~/components/products/ProductsTable";

const ProductsPage = () => {
  const router = useRouter();
  const { search } = router.query;
  const [productsQuery, refetch] = useQuery<
    GetProductsOverviewQuery,
    GetProductsOverviewQueryVariables
  >({
    query: GET_PRODUCTS_OVERVIEW,
  });
  return (
    <MainLayout pageName="Products" headerContent={<UserSearch />}>
      <ProductsTable products={productsQuery.data?.products}></ProductsTable>
    </MainLayout>
  );
};

export default ProductsPage;
