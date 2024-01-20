import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "urql";
import { gql } from "graphql-request";
import { useSession } from "next-auth/react";

import HeaderMenuList from "./HeaderMenuList";
import {
  type GetSelfOverviewQuery,
  type GetSelfOverviewQueryVariables,
} from "~/generated/graphql";

const GET_SELF_OVERVIEW_QUERY = gql`
  query GetSelfOverview($self_id: uuid!) {
    user: users_by_pk(id: $self_id) {
      name
      email
      role
      full_name
    }
  }
`;

const HeaderMenu = () => {
  const { data, status } = useSession();
  const [{ fetching, data: userOverview }] = useQuery<
    GetSelfOverviewQuery,
    GetSelfOverviewQueryVariables
  >({
    query: GET_SELF_OVERVIEW_QUERY,
    pause: !data?.user?.id,
    variables: {
      self_id: data?.user?.id,
    },
  });

  const user = userOverview?.user;

  return (
    <Skeleton display="flex" isLoaded={status !== "loading" && !fetching}>
      <Menu placement="bottom">
        <MenuButton
          transition="all 0.2s ease-in-out"
          rounded="full"
          _hover={{
            outline: "2px solid",
            outlineColor: "primary.dark",
          }}
          _focus={{
            outline: "2px solid",
            outlineColor: "primary.dark",
          }}
          aria-label="Toggle user menu"
        >
          <Avatar />
        </MenuButton>
        <HeaderMenuList />
      </Menu>
      <Box ml={2} w={150}>
        <Text>{user?.full_name}</Text>
        <Text fontSize="sm" color="primary.text">
          {user?.name} - {user?.role}
        </Text>
      </Box>
    </Skeleton>
  );
};

export default HeaderMenu;
