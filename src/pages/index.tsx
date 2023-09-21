import Head from "next/head";
import Image from "next/image";
import { Mohave, Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { mohave, poppins } from "~/utilities/fonts";
import { Flex, HStack, Text, chakra } from "@chakra-ui/react";

export default function Home() {
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
      <Flex w="100wv" h="100wh" flexDirection="column">
        <HStack
          as="nav"
          bgColor="primary.main"
          w="100%"
          h="5rem"
          roundedBottom="3xl"
          px="3.5rem"
        >
          <Image
            src="/images/logo.png"
            alt="Inventory Hub logo"
            width={45}
            height={21}
          />
          <Text
            className={mohave.className}
            color="white"
            fontSize="xl"
            textTransform="uppercase"
          >
            Inventory Hub
          </Text>
        </HStack>
        <chakra.main className={poppins.className}>Hi</chakra.main>
      </Flex>
    </>
  );
}
