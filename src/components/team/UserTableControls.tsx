import { Flex, Skeleton } from "@chakra-ui/react";
import Roles from "~/enums/Roles";
import useUserData from "~/hooks/useUserData";
import InviteUserFormButton from "./InviteUserFormButton";

const UserTableControls = () => {
  const { isLoading, user } = useUserData();
  const isInviteAuthorized =
    true || user?.role === Roles.Admin || user?.role === Roles.Manager;

  return (
    <Skeleton isLoaded={!isLoading}>
      <Flex
        justifyContent="flex-end"
        gap={2}
        p={2}
        visibility={isInviteAuthorized || isLoading ? "visible" : "hidden"}
      >
        <InviteUserFormButton />
      </Flex>
    </Skeleton>
  );
};

export default UserTableControls;
