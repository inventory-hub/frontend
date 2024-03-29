import { useCallback, useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
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
  Textarea,
  NumberInput,
  NumberInputField,
  Input,
  Text,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { gql } from "graphql-request";
import { type UseQueryExecute, useMutation } from "urql";

import { PrimaryOutlineInput } from "../ui/inputs";
import { FilledSecondaryButton, OutlinePrimaryButton } from "../ui/buttons";
import {
  type CreateProductMutation,
  type CreateProductMutationVariables,
  type CreateProductInput,
} from "~/generated/graphql";
import CategoriesAutoComplete from "../categories/CategoriesAutoComplete";

const AddIcon = chakra(BiPlus);
const CREATE_PRODUCT_LABEL = "Create Product";

const createProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long"),
  category_id: z.string(),
  initial_count: z.coerce
    .number()
    .min(0, "Initial count must be positive")
    .int("Initial count must be a whole number"),
  image_base64: z.string().nullish(),
}) satisfies z.ZodType<CreateProductInput>;

type CreateProductForm = z.infer<typeof createProductSchema>;

const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProduct($data: CreateProductInput!) {
    created_product: create_product(product: $data) {
      id
    }
  }
`;

type Props = ButtonProps & {
  refetchProducts: UseQueryExecute;
};

const AddProductFormButton = ({ refetchProducts, ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [fileName, setFileName] = useState<string>("");
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    getValues,
    setValue,
  } = useForm<CreateProductForm>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
      initial_count: 0,
    },
    mode: "onBlur",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [createState, createMutation] = useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CREATE_PRODUCT_MUTATION);

  useEffect(() => {
    const effect = async () => {
      if (createState.data) {
        refetchProducts({
          requestPolicy: "network-only",
        });
        toast({
          title: `Product "${getValues("name")}" created`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      }
    };
    effect();
  }, [createState.data, getValues, onClose, toast, refetchProducts]);

  useEffect(() => {
    if (createState.error) {
      setError("root", {
        message: createState.error.message,
      });
    }
  }, [createState.error, setError]);

  const onSubmit = useCallback(
    (data: CreateProductForm) => createMutation({ data }),
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
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel>Product Name</FormLabel>
                  <PrimaryOutlineInput
                    placeholder="Product Name"
                    {...register("name")}
                  />
                  <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.description}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    placeholder="Description"
                    {...register("description")}
                  />
                  <FormErrorMessage>
                    {errors.description?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.initial_count}>
                  <FormLabel>Initial Count</FormLabel>
                  <NumberInput>
                    <NumberInputField
                      placeholder="0"
                      {...register("initial_count")}
                    ></NumberInputField>
                  </NumberInput>
                  <FormErrorMessage>
                    {errors.initial_count?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.category_id}>
                  <FormLabel>Category</FormLabel>
                  <CategoriesAutoComplete
                    onChange={(value) => setValue("category_id", value)}
                  />
                  <FormErrorMessage>
                    {errors.category_id?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.image_base64}>
                  <FormLabel
                    w="fit-content"
                    mt={5}
                    display="flex"
                    alignItems="baseline"
                  >
                    <OutlinePrimaryButton
                      onClick={() => {
                        if (fileInputRef.current) {
                          fileInputRef.current.click();
                        }
                      }}
                    >
                      Upload Image
                    </OutlinePrimaryButton>
                    {fileName && (
                      <Text
                        ml={2}
                        overflow="hidden"
                        w={200}
                        whiteSpace="nowrap"
                      >
                        {fileName}
                      </Text>
                    )}
                  </FormLabel>
                  <Input
                    type="file"
                    accept="image/*"
                    display="none"
                    ref={fileInputRef}
                    onChange={(e) => {
                      e.preventDefault();
                      const file = e.target.files?.[0];
                      if (file) {
                        setFileName(file.name);
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          setValue("image_base64", e.target?.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <FormErrorMessage>
                    {errors.image_base64?.message}
                  </FormErrorMessage>
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
                Create Product
              </OutlinePrimaryButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default AddProductFormButton;
