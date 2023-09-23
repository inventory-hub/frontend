import Head from "next/head";
import Image from "next/image";
import { mohave, mplus1p, poppins } from "~/utilities/fonts";
import { Button, Divider, Flex, HStack, Text, chakra } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

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
          <HStack spacing="2rem" ml="auto">
            <Link href="/" color="primary.background" fontSize="xl">
              Home
            </Link>
            <Divider
              orientation="vertical"
              h="2rem"
              bgColor="primary.background"
            />
            <Button
              px="4rem"
              as={Link}
              href="/login"
              bgColor="secondary.main"
              _hover={{
                bgColor: "secondary.hover",
                textDecoration: "none",
              }}
              _focus={{
                bgColor: "secondary.focus",
              }}
              fontSize="sm"
              rounded="xl"
              fontWeight={400}
            >
              Log in &#10230;
            </Button>
          </HStack>
        </HStack>
        <chakra.main className={poppins.className}>Hi</chakra.main>
      </Flex>
    </>
  );
}
