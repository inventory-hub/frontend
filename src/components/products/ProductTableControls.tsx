import { Flex, Select, Skeleton } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { gql } from "graphql-request";
import { useQuery } from "urql";

import {
  type GetCategoriesQuery,
  type GetCategoriesQueryVariables,
  Roles_Enum,
} from "~/generated/graphql";
import { useProductsFiltersStore } from "~/stores/product-filters-store";
import AddProductFormButton from "./AddProductFormButton";

const GET_CATEGORIES_QUERY = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

const ProductTableControls = () => {
  const { data, status } = useSession();
  const category = useProductsFiltersStore(({ category }) => category);
  const setCategory = useProductsFiltersStore(({ setCategory }) => setCategory);
  const [{ data: categoriesData, fetching }] = useQuery<
    GetCategoriesQuery,
    GetCategoriesQueryVariables
  >({
    query: GET_CATEGORIES_QUERY,
  });
  const isLoading = status === "loading";
  const isCreationAuthorised =
    data?.user?.role === Roles_Enum.Admin ||
    data?.user?.role === Roles_Enum.Manager;

  return (
    <Skeleton isLoaded={!isLoading} w="auto">
      <Flex
        color="primary.main"
        gap={2}
        p={2}
        w="auto"
        visibility={isCreationAuthorised || isLoading ? "visible" : "hidden"}
      >
        <Select
          maxW={60}
          variant="outline"
          value={category}
          borderColor="primary.outline"
          _hover={{ borderColor: "primary.main" }}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Select category"
          disabled={fetching}
        >
          {categoriesData?.categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </Select>
        <AddProductFormButton ml="auto" />
      </Flex>
    </Skeleton>
  );
};

export default ProductTableControls;
