import { Link } from "@chakra-ui/next-js";
import NextImage from "next/image";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  SlideFade,
  Text,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { gql } from "graphql-request";
import { useQuery } from "urql";

import MainLayout from "~/components/main-layout";
import {
  type GetDashboardDataQuery,
  type GetDashboardDataQueryVariables,
} from "~/generated/graphql";

const GET_DASHBOARD_DATA_QUERY = gql`
  query GetDashboardData {
    products(order_by: { created_at: desc }, limit: 3) {
      name
      hash_name
      imageUrl
    }
    products_aggregate {
      aggregate {
        count
        sum {
          quantity
        }
      }
    }
    orders: orders_aggregate {
      aggregate {
        count
      }
    }
    completed_orders: orders_aggregate(where: { state: { _eq: Completed } }) {
      aggregate {
        count
      }
    }
    pending_orders: orders_aggregate(
      where: { state: { _eq: AwaitingApproval } }
    ) {
      aggregate {
        count
      }
    }
  }
`;

const slideFadeStyles = {
  height: "100%",
  width: "100%",
};

const MainPage = () => {
  const [{ data, fetching }] = useQuery<
    GetDashboardDataQuery,
    GetDashboardDataQueryVariables
  >({
    query: GET_DASHBOARD_DATA_QUERY,
  });

  return (
    <MainLayout pageName="Dashboard">
      <Grid gap={4} h="100%" templateColumns="1fr 1.5fr" templateRows="1fr 1fr">
        <GridItem>
          <SlideFade
            style={slideFadeStyles}
            in={!fetching}
            offsetX={-20}
            offsetY={0}
            delay={0.5}
          >
            <chakra.section
              rounded="md"
              h="full"
              bgColor="primary.dark"
              color="white"
              fontSize="4xl"
              fontWeight="bold"
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={2}
            >
              <chakra.header textAlign="center">
                Total registered products: 
                {data?.products_aggregate.aggregate?.count}
              </chakra.header>
              <Text>Latest added: </Text>
              <HStack gap={6}>
                {data?.products.map((product) => (
                  <Tooltip key={product.hash_name} label={product.name}>
                    <Link href={`/app/products/${product.hash_name}`}>
                      <NextImage
                        src={product.imageUrl}
                        alt={product.name}
                        width={100}
                        height={100}
                      />
                    </Link>
                  </Tooltip>
                ))}
              </HStack>
            </chakra.section>
          </SlideFade>
        </GridItem>
        <GridItem rowSpan={2}>
          <SlideFade
            style={slideFadeStyles}
            in={!fetching}
            offsetX={100}
            offsetY={0}
            delay={1}
          >
            <Box
              rounded="md"
              h="full"
              bgColor="primary.main"
              color="white"
              fontSize="4xl"
              fontWeight="bold"
            >
              Total Orders: {data?.orders.aggregate?.count}
              Completed orders: {data?.completed_orders.aggregate?.count}
              Pending orders: {data?.pending_orders.aggregate?.count}
            </Box>
          </SlideFade>
        </GridItem>
        <GridItem>
          <SlideFade
            style={slideFadeStyles}
            in={!fetching}
            offsetX={0}
            offsetY={100}
            delay={1.5}
          >
            <Box
              rounded="md"
              h="full"
              bgColor="accent.main"
              color="white"
              fontSize="4xl"
              fontWeight="bold"
            >
              Total products in stock:{" "}
              {data?.products_aggregate.aggregate?.sum?.quantity}
            </Box>
          </SlideFade>
        </GridItem>
      </Grid>
    </MainLayout>
  );
};

export default MainPage;
