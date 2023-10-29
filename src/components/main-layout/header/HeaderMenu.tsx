import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useUserData from "~/hooks/useUserData";
import HeaderMenuList from "./HeaderMenuList";

const HeaderMenu = () => {
  const { isLoading, user } = useUserData();

  return (
    <Skeleton display="flex" isLoaded={!isLoading}>
      <Menu>
        <MenuButton aria-label="Toggle user menu">
          <Avatar />
        </MenuButton>
        <HeaderMenuList />
      </Menu>
      <Box ml={2} w={150}>
        <Text>{`Names from API ${user?.firstName} ${user?.lastName}`}</Text>
        <Text fontSize="sm" color="primary.text">
          Employee #{user?.id}
        </Text>
      </Box>
    </Skeleton>
  );
};

export default HeaderMenu;
