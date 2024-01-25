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
  Flex,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { gql } from "graphql-request";
import { useQuery } from "urql";

import MainLayout from "~/components/main-layout";
import {
  type GetDashboardDataQuery,
  type GetDashboardDataQueryVariables,
} from "~/generated/graphql";
import { useEffect } from "react";
import OrdersPieChart from "~/components/dashboard/OrdersPieChart";

const pieChartData: Array<{ name: string; value: number; fill: string }> = [];

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
    canceled_orders: orders_aggregate(where: { state: { _eq: Cancelled } }) {
      aggregate {
        count
      }
    }
    draft_orders: orders_aggregate(where: { state: { _eq: Draft } }) {
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

  useEffect(() => {
    if (data) {
      pieChartData.push({
        name: "Completed",
        value: data.completed_orders.aggregate?.count ?? 0,
        fill: "#0088FE",
      });
      pieChartData.push({
        name: "Pending",
        value: data.pending_orders.aggregate?.count ?? 0,
        fill: "#00C49F",
      });
      pieChartData.push({
        name: "Cancelled",
        value: data.canceled_orders.aggregate?.count ?? 0,
        fill: "#FFBB28",
      });
      pieChartData.push({
        name: "Draft",
        value: data.draft_orders.aggregate?.count ?? 0,
        fill: "#FF8042",
      });
    }
  }, [data]);

  return (
    <MainLayout pageName="Dashboard">
      {!fetching && data && (
        <Grid
          gap={4}
          h="100%"
          templateColumns="1fr 1.5fr"
          templateRows="1fr 1fr"
        >
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
                bgColor="secondary.hover"
                color="white"
                fontSize="4xl"
                fontWeight="bold"
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
                borderRadius={27}
                justifyContent="center"
              >
                <chakra.header
                  textAlign="center"
                  fontSize="1.3rem"
                  fontWeight="500"
                >
                  Total registered products:
                  <span
                    style={{
                      backgroundColor: "white",
                      color: "#8bc0ff",
                      padding: "0 20px",
                      fontSize: "1rem",
                      borderRadius: 15,
                      marginLeft: 10,
                    }}
                  >
                    {data?.products_aggregate.aggregate?.count}
                  </span>
                </chakra.header>
                <Text fontWeight="500" fontSize="2.2rem" mb={7}>
                  Latest added:{" "}
                </Text>
                <HStack gap={6}>
                  {data?.products.map((product) => (
                    <Tooltip key={product.hash_name} label={product.name}>
                      <Link href={`/app/products/${product.hash_name}`}>
                        <NextImage
                          src={product.imageUrl}
                          alt={product.name}
                          width={100}
                          height={100}
                          style={{ borderRadius: 15 }}
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
              <Flex
                flexDirection="column"
                rounded="md"
                h="full"
                bgColor="white"
                color="black"
                fontSize="4xl"
                borderRadius={27}
                fontWeight="bold"
                p={10}
                gap={10}
              >
                <Text
                  fontSize="2rem"
                  textAlign="center"
                  justifyContent="center"
                >
                  Total Orders:{" "}
                  <span
                    style={{
                      backgroundColor: "#a383ff",
                      color: "white",
                      padding: "0 25px",
                      fontSize: "1.5rem",
                      borderRadius: 15,
                      marginLeft: 10,
                      alignSelf: "center",
                      fontWeight: 500,
                    }}
                  >
                    {data?.orders.aggregate?.count}
                  </span>
                </Text>
                <OrdersPieChart data={pieChartData} />
              </Flex>
            </SlideFade>
          </GridItem>
          <GridItem>
            <LinkBox h="100%">
              <LinkOverlay href="/app/products">
                <SlideFade
                  style={slideFadeStyles}
                  in={!fetching}
                  offsetX={0}
                  offsetY={100}
                  delay={1.5}
                >
                  <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    rounded="md"
                    h="full"
                    bgColor="accent.focus"
                    color="white"
                    fontSize="4xl"
                    fontWeight="bold"
                    borderRadius={27}
                  >
                    <Text
                      textAlign="center"
                      fontSize="1.3rem"
                      fontWeight="500"
                      marginBottom={2}
                    >
                      Total products in stock:{" "}
                    </Text>
                    <span
                      style={{
                        backgroundColor: "white",
                        color: "#a383ff",
                        padding: "0 30px",
                        fontSize: "2rem",
                        borderRadius: 30,
                        marginLeft: 10,
                      }}
                    >
                      {data?.products_aggregate.aggregate?.sum?.quantity}
                    </span>
                  </Flex>
                </SlideFade>
              </LinkOverlay>
            </LinkBox>
          </GridItem>
        </Grid>
      )}
    </MainLayout>
  );
};

export default MainPage;
