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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AiOutlineUserAdd } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import Roles from "~/enums/Roles";
import { inviteUser, type InviteUserData } from "~/services/auth-service";
import { PrimaryOutlineInput } from "../ui/inputs";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { FilledSecondaryButton, OutlinePrimaryButton } from "../ui/buttons";

const AddIcon = chakra(AiOutlineUserAdd);
const INVITE_LABEL = "Invite user";

const inviteUserSchema = z.object({
  email: z.string().email(),
  role: z.nativeEnum(Roles),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
}) satisfies z.ZodType<InviteUserData>;

type InviteUserForm = z.infer<typeof inviteUserSchema>;

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
      role: Roles.User,
      firstName: "",
      lastName: "",
    },
    mode: "onBlur",
  });

  const inviteMutation = useMutation({
    mutationFn: inviteUser,
    onSuccess: () => {
      toast({
        title: `Invite sent to ${getValues("email")}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    },
    onError: (response: { error: string }) =>
      setError("root", { message: response?.error ?? "Network Error" }),
  });

  const onSubmit = useCallback(
    (data: InviteUserForm) => inviteMutation.mutate(data),
    [inviteMutation]
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
                <FormControl isInvalid={!!errors.firstName}>
                  <FormLabel>First Name</FormLabel>
                  <PrimaryOutlineInput
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                  <FormErrorMessage>
                    {errors.firstName?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.firstName}>
                  <FormLabel>Last Name</FormLabel>
                  <PrimaryOutlineInput
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                  <FormErrorMessage>
                    {errors.lastName?.message}
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
                    <option value={Roles.User}>User</option>
                    <option value={Roles.ReadonlyUser}>Readonly User</option>
                    <option value={Roles.Manager}>Manager</option>
                    <option value={Roles.Admin}>Admin</option>
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
                isLoading={inviteMutation.isPending}
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
