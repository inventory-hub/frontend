import { useRouter } from "next/router";
import { gql } from "graphql-request";
import { useQuery } from "urql";

import MainLayout from "~/components/main-layout";
import HeaderSearch from "~/components/team/HeaderSearch";
import {
  type GetProductsOverviewQuery,
  type GetProductsOverviewQueryVariables,
} from "~/generated/graphql";
import ProductsTable from "~/components/products/ProductsTable";
import { useProductsFiltersStore } from "~/stores/product-filters-store";
import ProductTableControls from "~/components/products/ProductTableControls";

export const GET_PRODUCTS_OVERVIEW = gql`
  query GetProductsOverview(
    $search: String = "%%"
    $condition: products_bool_exp!
  ) {
    products(
      where: {
        _and: [
          {
            _or: [
              { name: { _ilike: $search } }
              { description: { _ilike: $search } }
              { hash_name: { _ilike: $search } }
            ]
          }
          $condition
        ]
      }
    ) {
      id
      name
      description
      category {
        name
      }
      imageUrl
      quantity
      hash_name
    }
  }
`;

const ProductsPage = () => {
  const router = useRouter();
  const search = Array.isArray(router.query.search)
    ? ""
    : router.query.search ?? "";
  const category = useProductsFiltersStore(({ category }) => category);
  const [productsQuery] = useQuery<
    GetProductsOverviewQuery,
    GetProductsOverviewQueryVariables
  >({
    query: GET_PRODUCTS_OVERVIEW,
    variables: {
      search: `%${search}%`,
      condition: {
        ...(category ? { category: { name: { _eq: category } } } : {}),
      },
    },
  });
  return (
    <MainLayout
      pageName="Products"
      headerContent={<HeaderSearch placeholder="Search products" />}
    >
      <ProductTableControls />
      <ProductsTable products={productsQuery.data?.products}></ProductsTable>
    </MainLayout>
  );
};

export default ProductsPage;
