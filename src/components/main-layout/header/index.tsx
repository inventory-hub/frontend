import {
  Avatar,
  Box,
  Divider,
  Flex,
  Menu,
  MenuButton,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useUserData from "~/hooks/useUserData";
import HeaderMenuList from "./HeaderMenuList";

type HeaderProps = {
  pageName: string;
};

const Header = ({ pageName }: HeaderProps) => {
  const { isLoading, user } = useUserData();
  return (
    <Flex
      bg="white"
      height={20}
      roundedBottom="3xl"
      align="center"
      justifyContent="space-between"
      p={10}
    >
      <Text fontSize="xl" color="black" fontWeight="bold">
        {pageName}
      </Text>
      <Flex>
        <Divider orientation="vertical" mr={2} />
        <Skeleton display="flex" isLoaded={!isLoading}>
          <Menu>
            <MenuButton aria-label="Toggle user menu">
              <Avatar />
            </MenuButton>
            <HeaderMenuList />
          </Menu>
          <Box ml={2}>
            <Text>{`Names from API ${user?.firstName} ${user?.lastName}`}</Text>
            <Text fontSize="sm" color="primary.text">
              Employee #{user?.id}
            </Text>
          </Box>
        </Skeleton>
      </Flex>
    </Flex>
  );
};

export default Header;
