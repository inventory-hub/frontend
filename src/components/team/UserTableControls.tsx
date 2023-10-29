import { Flex, IconButton, Skeleton, Tooltip, chakra } from "@chakra-ui/react";
import Roles from "~/enums/Roles";
import useUserData from "~/hooks/useUserData";
import { AiOutlineUserAdd } from "react-icons/ai";

const AddIcon = chakra(AiOutlineUserAdd);
const INVITE_LABEL = "Invite user";

const UserTableControls = () => {
  const { isLoading, user } = useUserData();
  const isInviteAuthorized =
    user?.role === Roles.Admin || user?.role === Roles.Manager;

  return (
    <Skeleton isLoaded={!isLoading}>
      <Flex
        justifyContent="flex-end"
        gap={2}
        p={2}
        visibility={isInviteAuthorized || isLoading ? "visible" : "hidden"}
      >
        <Tooltip
          hasArrow
          label="Invite user"
          placement="top"
          aria-label={INVITE_LABEL}
        >
          <IconButton
            outline="2px solid"
            outlineColor="primary.dark"
            aria-label={INVITE_LABEL}
            icon={<AddIcon fontSize="2rem" color="primary.dark" />}
            colorScheme="primary"
            variant="ghost"
            size="md"
          />
        </Tooltip>
      </Flex>
    </Skeleton>
  );
};

export default UserTableControls;
