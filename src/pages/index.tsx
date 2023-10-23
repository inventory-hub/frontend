import Head from "next/head";
import Image from "next/image";
import { Heading, Text, chakra } from "@chakra-ui/react";
import LandingLayout from "~/components/landing/landing-layout";
import warehouseLandingImage from "~/assets/images/landing_warehouse.png";
import { FilledSecondaryButton } from "~/components/ui/buttons";

const Home = () => {
  return (
    <>
      <Head>
        <title>Inventory Hub</title>
        <meta
          name="description"
          content="Inventory Hub - Warehouse management system"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout
        maxW="container.lg"
        display="grid"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1.5fr" }}
        alignSelf="center"
        justifyContent="center"
        alignItems="center"
      >
        <chakra.section
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            lg: "1fr",
          }}
          gap="1rem"
          mr={{
            base: "0",
            lg: "-1rem",
          }}
        >
          <Heading
            color="black"
            fontSize={{ base: "4xl", lg: "6xl" }}
            textShadow={{
              base: "0 0 5px rgba(0, 0, 0, 0.2)",
              lg: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
            fontWeight={500}
            lineHeight="0.9"
          >
            Warehouse Management System
          </Heading>
          <Text
            alignSelf={{ base: "flex-end", lg: "flex-start" }}
            color="primary.text"
            fontSize="sm"
            noOfLines={10}
            mr={{
              base: "0",
              lg: "2rem",
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </Text>
          <FilledSecondaryButton
            rounded="full"
            w="fit-content"
            fontWeight={400}
            p="1.5rem"
          >
            Get started &#10230;
          </FilledSecondaryButton>
        </chakra.section>
        <chakra.div
          justifySelf="center"
          p={{
            base: "2rem",
            lg: "0",
          }}
        >
          <Image
            src={warehouseLandingImage}
            style={{
              objectFit: "contain",
            }}
            alt="Warehouse"
          />
        </chakra.div>
      </LandingLayout>
    </>
  );
};

export default Home;
