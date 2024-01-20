import { Flex, Skeleton } from "@chakra-ui/react";

import InviteUserFormButton from "./InviteUserFormButton";
import { useSession } from "next-auth/react";
import { Roles_Enum } from "~/generated/graphql";

const UserTableControls = () => {
  const { data, status } = useSession();
  const isLoading = status === "loading";
  const isInviteAuthorized =
    data?.user?.role === Roles_Enum.Admin ||
    data?.user?.role === Roles_Enum.Manager;

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
