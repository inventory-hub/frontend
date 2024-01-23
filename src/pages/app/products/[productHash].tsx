import { Center, Flex, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import { gql } from "graphql-request";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import MainLayout from "~/components/main-layout";
import {
  type GetProductDetailsQuery,
  type GetProductDetailsQueryVariables,
} from "~/generated/graphql";

const GET_PRODUCT_DETAILS_QUERY = gql`
  query GetProductDetails($hashName: String!) {
    products(where: { hash_name: { _eq: $hashName } }) {
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

const ProductDetailsPage = () => {
  const router = useRouter();
  const productHash = router.query.productHash as string;
  const [{ data, fetching }, refetch] = useQuery<
    GetProductDetailsQuery,
    GetProductDetailsQueryVariables
  >({
    query: GET_PRODUCT_DETAILS_QUERY,
    variables: {
      hashName: productHash,
    },
  });

  const product = data?.products[0];

  const { status } = useSession();
  const isLoading = status === "loading";

  return (
    <div>
      <MainLayout pageName="Product Details Page">
        <Skeleton height="100%" isLoaded={!isLoading}>
          <Grid
            templateColumns="repeat(9, 1fr)"
            height="100%"
            color="primary.main"
            gap={4}
            p={2}
            overflow="hidden"
          >
            <GridItem colSpan={4} borderRadius="30" flex="1" bgColor="white">
              <Center>1</Center>
            </GridItem>
            <GridItem colSpan={5} borderRadius="30" flex="1" bgColor="white">
              <Center>2</Center>
            </GridItem>
          </Grid>
        </Skeleton>
      </MainLayout>
    </div>
  );
};

export default ProductDetailsPage;
