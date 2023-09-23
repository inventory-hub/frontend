import Head from "next/head";
import Image from "next/image";
import { mohave, poppins } from "~/utilities/fonts";
import {
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  chakra,
} from "@chakra-ui/react";
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
      <Flex w="auto" minH="100dvh" flexDirection="column" overflowX="hidden">
        <HStack
          as="nav"
          bgColor="primary.main"
          w="auto"
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
        <chakra.main
          p="1rem"
          flexGrow={1}
          maxW="container.lg"
          className={poppins.className}
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1.5fr" }}
          alignSelf="center"
          justifyContent="center"
          alignItems="center"
        >
          <chakra.section
            display="grid"
            gridTemplateColumns={{
              base: "1fr 1fr",
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
              fontSize="6xl"
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
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </Text>
            <Button
              rounded="full"
              bgColor="secondary.main"
              _hover={{
                bgColor: "secondary.hover",
                textDecoration: "none",
              }}
              _focus={{
                bgColor: "secondary.focus",
              }}
              w="fit-content"
              fontWeight={400}
              p="1.5rem"
            >
              Get started &#10230;
            </Button>
          </chakra.section>
          <chakra.div
            justifySelf="center"
            p={{
              base: "2rem",
              lg: "0",
            }}
          >
            <Image
              style={{
                objectFit: "contain",
              }}
              width={767}
              height={494}
              alt="Warehouse"
              src="/images/landing/warehouse.png"
            />
          </chakra.div>
        </chakra.main>
      </Flex>
    </>
  );
}
