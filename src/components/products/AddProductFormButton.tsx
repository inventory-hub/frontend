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
  type ButtonProps,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AiOutlineUserAdd } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { gql } from "graphql-request";
import { useMutation, useQuery } from "urql";

import { PrimaryOutlineInput } from "../ui/inputs";
import { FilledSecondaryButton, OutlinePrimaryButton } from "../ui/buttons";
import {
  type InviteUserInput,
  RolesEnum,
  type CreateProductMutation,
  type CreateProductMutationVariables,
} from "~/generated/graphql";

const AddIcon = chakra(AiOutlineUserAdd);
const CREATE_PRODUCT_LABEL = "Create Product";

const inviteUserSchema = z.object({
  email: z.string().email(),
  role: z.nativeEnum(RolesEnum),
  first_name: z.string().min(1),
  last_name: z.string().min(1),
}) satisfies z.ZodType<InviteUserInput>;

type InviteUserForm = z.infer<typeof inviteUserSchema>;

const GET_CATEGORIES_WITH_IDS = gql`
  query GetCategoriesWithIds {
    categories {
      id
      name
    }
  }
`;

const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($data: products_insert_input!) {
    created_product: insert_products_one(object: $data) {
      id
    }
  }
`;

type Props = ButtonProps;

const AddProductFormButton = (props: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [{ data: categoriesData }] = useQuery({
    query: GET_CATEGORIES_WITH_IDS,
  });
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

  const [createState, createMutation] = useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CREATE_PRODUCT_MUTATION);

  useEffect(() => {
    if (createState.data) {
      toast({
        title: `Invite sent to ${getValues("email")}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    }
  }, [createState.data, getValues, onClose, toast]);

  useEffect(() => {
    if (createState.error) {
      setError("root", {
        message: createState.error.message,
      });
    }
  }, [createState.error, setError]);

  const onSubmit = useCallback(
    (data: InviteUserForm) => createMutation({ data }),
    [createMutation]
  );

  return (
    <>
      <Tooltip
        hasArrow
        label={CREATE_PRODUCT_LABEL}
        placement="top"
        aria-label={CREATE_PRODUCT_LABEL}
      >
        <IconButton
          onClick={onOpen}
          outline="2px solid"
          outlineColor="primary.dark"
          aria-label={CREATE_PRODUCT_LABEL}
          icon={<AddIcon fontSize="2rem" color="primary.dark" />}
          colorScheme="primary"
          variant="ghost"
          size="md"
          {...props}
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
                isLoading={createState.fetching}
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

export default AddProductFormButton;
