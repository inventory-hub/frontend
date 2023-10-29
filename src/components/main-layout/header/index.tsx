import { Divider, Flex, Text } from "@chakra-ui/react";
import HeaderMenu from "./HeaderMenu";
import { type ReactNode } from "react";

type HeaderProps = {
  pageName: string;
  children?: ReactNode;
};

const Header = ({ pageName, children }: HeaderProps) => {
  return (
    <Flex
      bg="white"
      height={20}
      roundedBottom="3xl"
      align="center"
      justifyContent="space-between"
      p={10}
    >
      <Text fontSize="2xl" color="black" fontWeight="bold">
        {pageName}
      </Text>
      <Flex gap={2} alignItems="center">
        {children}
        <Divider orientation="vertical" mr={2} />
        <HeaderMenu />
      </Flex>
    </Flex>
  );
};

export default Header;
