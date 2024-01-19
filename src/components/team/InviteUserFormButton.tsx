import { useCallback, useEffect } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Tooltip,
  IconButton,
  chakra,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  useToast,
  ModalContent,
  Alert,
  AlertDescription,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AiOutlineUserAdd } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { gql } from "graphql-request";
import { useMutation } from "urql";

import { PrimaryOutlineInput } from "../ui/inputs";
import { FilledSecondaryButton, OutlinePrimaryButton } from "../ui/buttons";
import {
  type InviteUserInput,
  RolesEnum,
  type InviteUserMutation,
  type InviteUserMutationVariables,
} from "~/generated/graphql";

const AddIcon = chakra(AiOutlineUserAdd);
const INVITE_LABEL = "Invite user";

const inviteUserSchema = z.object({
  email: z.string().email(),
  role: z.nativeEnum(RolesEnum),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
}) satisfies z.ZodType<InviteUserInput>;

type InviteUserForm = z.infer<typeof inviteUserSchema>;

const INVITE_USER_MUTATION = gql`
  mutation InviteUser($data: InviteUserInput!) {
    invited_user: invite_user(data: $data) {
      id
    }
  }
`;

const InviteUserFormButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    getValues,
  } = useForm<InviteUserForm>({
    resolver: zodResolver(inviteUserSchema),
    defaultValues: {
      email: "",
      role: RolesEnum.User,
      first_name: "",
      last_name: "",
    },
    mode: "onBlur",
  });

  const [inviteState, inviteUser] = useMutation<
    InviteUserMutation,
    InviteUserMutationVariables
  >(INVITE_USER_MUTATION);

  useEffect(() => {
    if (inviteState.data) {
      toast({
        title: `Invite sent to ${getValues("email")}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    }
  }, [inviteState.data, getValues, onClose, toast]);

  useEffect(() => {
    if (inviteState.error) {
      setError("root", {
        message: inviteState.error.message,
      });
    }
  }, [inviteState.error, setError]);

  const onSubmit = useCallback(
    (data: InviteUserForm) => inviteUser({ data }),
    [inviteUser]
  );

  return (
    <>
      <Tooltip
        hasArrow
        label="Invite user"
        placement="top"
        aria-label={INVITE_LABEL}
      >
        <IconButton
          onClick={onOpen}
          outline="2px solid"
          outlineColor="primary.dark"
          aria-label={INVITE_LABEL}
          icon={<AddIcon fontSize="2rem" color="primary.dark" />}
          colorScheme="primary"
          variant="ghost"
          size="md"
        />
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent p={6}>
            <ModalBody maxW="lg">
              <form>
                {errors.root?.message && (
                  <Alert
                    status="error"
                    mb={6}
                    rounded="sm"
                    border="1px solid"
                    borderColor="red.200"
                  >
                    <AlertDescription>{errors.root?.message}</AlertDescription>
                  </Alert>
                )}
                <FormControl isInvalid={!!errors.first_name}>
                  <FormLabel>First Name</FormLabel>
                  <PrimaryOutlineInput
                    placeholder="First Name"
                    {...register("first_name")}
                  />
                  <FormErrorMessage>
                    {errors.first_name?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.first_name}>
                  <FormLabel>Last Name</FormLabel>
                  <PrimaryOutlineInput
                    placeholder="Last Name"
                    {...register("last_name")}
                  />
                  <FormErrorMessage>
                    {errors.last_name?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel>Email</FormLabel>
                  <PrimaryOutlineInput
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.role}>
                  <FormLabel>Role</FormLabel>
                  <Select {...register("role")}>
                    <option value={RolesEnum.User}>User</option>
                    <option value={RolesEnum.ReadonlyUser}>
                      Readonly User
                    </option>
                    <option value={RolesEnum.Manager}>Manager</option>
                    <option value={RolesEnum.Admin}>Admin</option>
                  </Select>
                  <FormErrorMessage>{errors.role?.message}</FormErrorMessage>
                </FormControl>
              </form>
            </ModalBody>
            <ModalFooter>
              <FilledSecondaryButton mr={3} onClick={onClose}>
                Close
              </FilledSecondaryButton>
              <OutlinePrimaryButton
                type="submit"
                disabled={!isValid}
                isLoading={inviteState.fetching}
                onClick={handleSubmit(onSubmit)}
              >
                Send Invitation
              </OutlinePrimaryButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default InviteUserFormButton;
