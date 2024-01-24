import {
  Alert,
  AlertDescription,
  Box,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Skeleton,
  Text,
  chakra,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { gql } from "graphql-request";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiPlus } from "react-icons/bi";
import { useMutation, useQuery } from "urql";
import { z } from "zod";
import CategoriesAutoComplete from "~/components/categories/CategoriesAutoComplete";
import MainLayout from "~/components/main-layout";
import IncreaseQuantityModal from "~/components/products/product-details/IncreaseQuantityModal";
import AutoComplete from "~/components/ui/AutoComplete";
import {
  FilledPrimaryButton,
  FilledSecondaryButton,
} from "~/components/ui/buttons";
import { PrimaryOutlineInput } from "~/components/ui/inputs";
import {
  type IncreaseProductQuantityMutationVariables,
  type EditProductMutation,
  type EditProductMutationVariables,
  type GetProductDetailsQuery,
  type GetProductDetailsQueryVariables,
  type IncreaseProductQuantityMutation,
} from "~/generated/graphql";

const GET_PRODUCT_DETAILS_QUERY = gql`
  query GetProductDetails($hashName: String!) {
    products(where: { hash_name: { _eq: $hashName } }) {
      id
      name
      description
      category {
        id
        name
      }
      imageUrl
      quantity
      hash_name
    }
  }
`;

const EDIT_PRODUCT_MUTATION = gql`
  mutation EditProduct(
    $id: uuid!
    $name: String!
    $category_id: uuid!
    $description: String!
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        category_id: $category_id
        description: $description
      }
    ) {
      id
      name
      category_id
      description
    }
  }
`;

const editProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  category_id: z.any(),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long"),
}) satisfies z.ZodType<{ name: string; description: string }>;

type EditProductForm = z.infer<typeof editProductSchema>;

const INCREASE_PRODUCT_QUANTITY_MUTATION = gql`
  mutation IncreaseProductQuantity($id: uuid!, $quantity: Int!) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _inc: { quantity: $quantity }
    ) {
      id
      quantity
    }
  }
`;

const increaseProductQuantity = z.object({
  initial_count: z.coerce
    .number()
    .min(0, "Initial count must be positive")
    .int("Initial count must be a whole number"),
}) satisfies z.ZodType<{ initial_count: number }>;

type IncreaseProductQuantityForm = z.infer<typeof increaseProductQuantity>;

const AddIcon = chakra(BiPlus);

const ADD_PRODUCTS_LABEL = "Add Products";

const ProductDetailsPage = () => {
  const router = useRouter();
  const productHash = router.query.productHash as string;
  const [{ data, fetching }, refetch] = useQuery<
    GetProductDetailsQuery,
    GetProductDetailsQueryVariables
  >({
    query: GET_PRODUCT_DETAILS_QUERY,
    variables: {
      hashName: productHash,
    },
  });

  const product = data?.products[0];

  const [editable, setEditable] = useState<boolean>(false);

  const { status } = useSession();
  const isLoading = status === "loading";

  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    getValues,
    setValue,
  } = useForm<EditProductForm>({
    resolver: zodResolver(editProductSchema),
    mode: "onBlur",
  });

  const {
    register: registerQuantity,
    handleSubmit: handleSubmitQuantity,
    formState: { errors: errorsQuantity, isValid: isValidQuantity },
    setError: setErrorQuantity,
    setValue: setValueQuantity,
  } = useForm<IncreaseProductQuantityForm>({
    resolver: zodResolver(increaseProductQuantity),
    mode: "onBlur",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [editState, editMutation] = useMutation<
    EditProductMutation,
    EditProductMutationVariables
  >(EDIT_PRODUCT_MUTATION);

  const [increaseProductQuantityState, increaseProductQuantityMutation] =
    useMutation<
      IncreaseProductQuantityMutation,
      IncreaseProductQuantityMutationVariables
    >(INCREASE_PRODUCT_QUANTITY_MUTATION);

  useEffect(() => {
    const effect = async () => {
      if (editState.data) {
        refetch({
          requestPolicy: "network-only",
        });
        toast({
          title: `Product "${getValues("name")}" edited`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      }
    };
    effect();
  }, [editState.data, getValues, onClose, toast, refetch]);

  useEffect(() => {
    const effect = async () => {
      if (increaseProductQuantityState.data) {
        refetch({
          requestPolicy: "network-only",
        });
        toast({
          title: `Product "${product?.name}" quantity increased`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      }
    };
    effect();
  }, [
    increaseProductQuantityState.data,
    product?.name,
    onClose,
    toast,
    refetch,
  ]);

  useEffect(() => {
    setValue("category_id", product?.category?.id);
  }, [product?.category?.id, setValue]);

  const onQuantitySubmit = useCallback(
    (data: IncreaseProductQuantityForm) => {
      increaseProductQuantityMutation({
        id: product?.id,
        quantity: data.initial_count,
      });
      setEditable(false);
    },
    [increaseProductQuantityMutation, product?.id]
  );

  const onDataSubmit = useCallback(
    (data: EditProductForm) => {
      editMutation({
        id: product?.id,
        name: data.name,
        category_id: data.category_id,
        description: data.description,
      });
      setEditable(false);
    },
    [editMutation, product?.id]
  );

  return (
    <div>
      <MainLayout pageName="Product Details Page">
        <Skeleton height="100%" isLoaded={!isLoading}>
          <Grid
            templateColumns="repeat(9, 1fr)"
            height="100%"
            color="primary.main"
            gap={4}
            overflow="hidden"
          >
            <GridItem colSpan={4} borderRadius="30" flex="1" bgColor="white">
              <Center>1</Center>
            </GridItem>
            <GridItem colSpan={5} borderRadius="30" flex="1" bgColor="white">
              <Flex direction="column" p="10">
                <Flex justifyContent="space-between">
                  <Heading fontSize="3xl" fontWeight="500" mb="7">
                    {product?.name}
                  </Heading>
                  <Flex gap={5}>
                    {editable && (
                      <FilledSecondaryButton
                        type="submit"
                        disabled={!isValid}
                        isLoading={editState.fetching}
                        onClick={handleSubmit(onDataSubmit)}
                      >
                        Save
                      </FilledSecondaryButton>
                    )}
                    <FilledPrimaryButton
                      onClick={() => {
                        setEditable(!editable);
                        console.log("editable: ", editable);
                      }}
                    >
                      {editable ? "Cancel" : "Edit"}
                    </FilledPrimaryButton>
                  </Flex>
                </Flex>

                <Flex gap="10" mt="10">
                  <HStack
                    alignItems="start"
                    spacing="7"
                    justifyContent="space-around"
                    flexDirection="column"
                  >
                    <Text>Name</Text>
                    <Text>Category</Text>
                    <Text>Description</Text>
                    <Text>Quantity</Text>
                  </HStack>

                  <form style={{ width: "100%" }}>
                    <HStack
                      spacing="7"
                      flexDirection="column"
                      justifyContent="space-around"
                      alignItems="start"
                    >
                      {editable ? (
                        <>
                          {errors.root?.message && (
                            <Alert
                              status="error"
                              mb={6}
                              rounded="sm"
                              border="1px solid"
                              borderColor="red.200"
                            >
                              <AlertDescription>
                                {errors.root?.message}
                              </AlertDescription>
                            </Alert>
                          )}
                          <FormControl isInvalid={!!errors.name}>
                            <PrimaryOutlineInput
                              defaultValue={product?.name}
                              {...register("name")}
                            />
                            <FormErrorMessage>
                              {errors.description?.message}
                            </FormErrorMessage>
                          </FormControl>
                          <FormControl>
                            <CategoriesAutoComplete
                              onChange={(value) =>
                                setValue("category_id", value)
                              }
                              defaultValue={product?.category.name}
                            />
                            <FormErrorMessage>
                              {errors.name?.message}
                            </FormErrorMessage>
                          </FormControl>
                          <FormControl isInvalid={!!errors.description}>
                            <PrimaryOutlineInput
                              defaultValue={product?.description}
                              {...register("description")}
                            />
                            <FormErrorMessage>
                              {errors.description?.message}
                            </FormErrorMessage>
                          </FormControl>
                        </>
                      ) : (
                        <>
                          <Text>{product?.name}</Text>
                          <Text>{product?.category.name}</Text>
                          <Text>{product?.description}</Text>
                        </>
                      )}

                      <Flex alignItems="center" m={0} gap={7}>
                        <Text>{product?.quantity}</Text>
                        <IconButton
                          onClick={onOpen}
                          outline="2px solid"
                          outlineColor="primary.dark"
                          aria-label={ADD_PRODUCTS_LABEL}
                          icon={
                            <AddIcon fontSize="1.5rem" color="primary.dark" />
                          }
                          colorScheme="primary"
                          variant="ghost"
                          size="xs"
                        />
                        <IncreaseQuantityModal
                          isOpen={isOpen}
                          onClose={onClose}
                          errors={errorsQuantity}
                          register={registerQuantity}
                          onSubmit={handleSubmitQuantity(onQuantitySubmit)}
                          isValid={isValidQuantity}
                          isLoading={increaseProductQuantityState.fetching}
                        />
                      </Flex>
                    </HStack>
                  </form>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Skeleton>
      </MainLayout>
    </div>
  );
};

export default ProductDetailsPage;
