import { Box, Flex, Text } from "@chakra-ui/react";

type HeaderProps = {
  pageName: string;
};

const Header = ({ pageName }: HeaderProps) => {
  return (
    <Flex bg="white" height={20} roundedBottom="3xl" align="center">
      <Text fontSize="xl" color="black" fontWeight="bold" mx="10">
        {pageName}
      </Text>
    </Flex>
  );
};

export default Header;
