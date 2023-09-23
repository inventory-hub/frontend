import { Flex, chakra, type ChakraProps } from "@chakra-ui/react";
import { poppins } from "~/utilities/fonts";
import LandingNavbar from "./LandingNavbar";
import { type PropsWithChildren } from "react";

const LandingLayout = (props: PropsWithChildren<ChakraProps>) => {
  return (
    <Flex w="auto" minH="100dvh" flexDirection="column" overflowX="hidden">
      <LandingNavbar />
      <chakra.main
        p="1rem"
        flexGrow={1}
        className={poppins.className}
        {...props}
      />
    </Flex>
  );
};

export default LandingLayout;
