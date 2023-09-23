import { memo } from "react";
import Image from "next/image";
import { Link } from "@chakra-ui/next-js";
import { HStack, type ChakraProps, Divider, Text } from "@chakra-ui/react";

import { mohave } from "~/utilities/fonts";
import logoImage from "~/assets/images/logo.png";
import { FilledSecondaryButton } from "~/components/ui/buttons";

const LandingNavbar = (props: ChakraProps) => {
  return (
    <HStack
      as="nav"
      bgColor="primary.dark"
      w="auto"
      h="5rem"
      roundedBottom="3xl"
      px={{
        base: "1rem",
        lg: "3.5rem",
      }}
      {...props}
    >
      <Image src={logoImage} alt="Inventory Hub logo" width={45} height={21} />
      <Text
        className={mohave.className}
        color="white"
        fontSize="xl"
        textTransform="uppercase"
        userSelect="none"
      >
        Inventory Hub
      </Text>
      <HStack spacing="2rem" ml="auto">
        <Link href="/" color="primary.background" fontSize="xl">
          Home
        </Link>
        <Divider orientation="vertical" h="2rem" bgColor="primary.background" />
        <FilledSecondaryButton
          px={{
            base: "1rem",
            md: "4rem",
          }}
          as={Link}
          href="/login"
          fontSize="sm"
          rounded="xl"
          fontWeight={400}
        >
          Log in &#10230;
        </FilledSecondaryButton>
      </HStack>
    </HStack>
  );
};

export default memo(LandingNavbar);
