import { Divider, Flex, Text } from "@chakra-ui/react";
import HeaderMenu from "./HeaderMenu";
import { type ReactNode } from "react";
import BackButton from "~/components/ui/BackButton";

type HeaderProps = {
  pageName: string;
  children?: ReactNode;
  back?: boolean;
};

const Header = ({ pageName, back, children }: HeaderProps) => {
  return (
    <Flex
      bg="white"
      height={20}
      roundedBottom="3xl"
      align="center"
      justifyContent="space-between"
      p={10}
    >
      <Flex gap={3}>
        {back && <BackButton />}
        <Text fontSize="2xl" color="black" fontWeight="bold">
          {pageName}
        </Text>
      </Flex>
      <Flex gap={2} alignItems="center">
        {children}
        <Divider orientation="vertical" mr={2} />
        <HeaderMenu />
      </Flex>
    </Flex>
  );
};

export default Header;
