import MainLayout from "~/components/main-layout";
import UserSearch from "~/components/team/UserSearch";
import { useQuery } from "urql";
import { GET_PRODUCTS_OVERVIEW } from "~/graphql/queries/products";
import {
  type GetProductsOverviewQuery,
  type GetProductsOverviewQueryVariables,
} from "~/generated/graphql";
import ProductsTable from "~/components/products/ProductsTable";

const ProductsPage = () => {
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
