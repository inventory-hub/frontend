import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  Stack,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  List,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z, { nativeEnum } from "zod";
import { gql } from "graphql-request";
import { type UseQueryExecute, useMutation, useQuery } from "urql";

import { PrimaryOutlineInput } from "../ui/inputs";
import {
  FilledSecondaryButton,
  OutlinePrimaryButton,
  OutlineSecondaryButton,
} from "../ui/buttons";
import {
  type CreateOrderMutationVariables,
  Order_States_Enum,
  type CreateOrderMutation,
  Orders,
} from "~/generated/graphql";
import ProductsAutoComplete, {
  type ProductSelection,
} from "./add-order-form-button/ProductsAutoComplete";

const AddIcon = chakra(BiPlus);
const ADD_ORDER_LABEL = "Add Order";

const addOrderSchema = z.object({
  client_name: z.string().min(1, "Client name is required"),
  order_items: z
    .array(
      z.object({ product_id: z.string(), quantity: z.number().nonnegative() })
    )
    .min(1, "At least one order item is required"),
}) satisfies z.ZodType<CreateOrderMutationVariables["data"]>;

type AddOrderForm = z.infer<typeof addOrderSchema>;

const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrder($data: orders_insert_input!) {
    created_order: insert_orders_one(object: $data) {
      id
    }
  }
`;

type Props = ButtonProps & {
  refetchOrders: UseQueryExecute;
};

const AddOrderFormButton = ({ refetchOrders, ...props }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    getValues,
    setValue,
    watch,
    trigger,
  } = useForm<AddOrderForm>({
    resolver: zodResolver(addOrderSchema),
    mode: "onBlur",
    defaultValues: {
      order_items: [],
    },
  });
  const [currentProduct, setCurrentProduct] = useState<ProductSelection | null>(
    null
  );
  const currentQuantity = useRef<number>(1);
  const [orderItems, setOrderItems] = useState<
    { product: ProductSelection; quantity: number }[]
  >([]);

  const [createState, createMutation] = useMutation<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >(CREATE_ORDER_MUTATION);

  useEffect(() => {
    const effect = async () => {
      if (createState.data) {
        refetchOrders({
          requestPolicy: "network-only",
        });
        toast({
          title: `Orders created`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      }
    };
    effect();
  }, [createState.data, getValues, onClose, toast, refetchOrders]);

  useEffect(() => {
    if (createState.error) {
      setError("root", {
        message: createState.error.message,
      });
    }
  }, [createState.error, setError]);

  const onSubmit = useCallback(
    (data: AddOrderForm) =>
      createMutation({
        data: {
          client_name: data.client_name,
          state: Order_States_Enum.AwaitingApproval,
          orders_items: {
            data: data.order_items.map((item) => ({
              product_id: item.product_id,
              count: item.quantity,
            })),
          },
        },
      }),
    [createMutation]
  );

  const onDraftSubmit = useCallback(
    (data: AddOrderForm) =>
      createMutation({
        data: {
          client_name: data.client_name,
          state: Order_States_Enum.Draft,
          orders_items: {
            data: data.order_items.map((item) => ({
              product_id: item.product_id,
              count: item.quantity,
            })),
          },
        },
      }),
    [createMutation]
  );

  return (
    <>
      <Tooltip
        hasArrow
        label={ADD_ORDER_LABEL}
        placement="top"
        aria-label={ADD_ORDER_LABEL}
      >
        <IconButton
          onClick={onOpen}
          outline="2px solid"
          outlineColor="primary.dark"
          aria-label={ADD_ORDER_LABEL}
          icon={<AddIcon fontSize="2rem" color="primary.dark" />}
          colorScheme="primary"
          variant="ghost"
          size="md"
          {...props}
        />
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent as="form" p={6}>
            <ModalBody maxW="lg">
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
              <FormControl isInvalid={!!errors.client_name}>
                <FormLabel>Client</FormLabel>
                <PrimaryOutlineInput
                  placeholder="Client"
                  {...register("client_name")}
                />
                <FormErrorMessage>
                  {errors.client_name?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.order_items}>
                <FormLabel mt={4}>Order Items</FormLabel>
                <FormErrorMessage>
                  {errors.order_items?.message}
                </FormErrorMessage>
                <List spacing={2}>
                  {orderItems.map((item, index) => (
                    <ListItem key={index}>
                      {item.product.name} x {item.quantity}
                    </ListItem>
                  ))}
                </List>
                <HStack spacing={1}>
                  <ProductsAutoComplete onChange={setCurrentProduct} />
                  <NumberInput
                    defaultValue={1}
                    min={1}
                    max={currentProduct?.quantity}
                    onChange={(_, value) => {
                      currentQuantity.current = value;
                    }}
                    w={20}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <IconButton
                    aria-label="Add Order Item"
                    icon={<AddIcon />}
                    onClick={() => {
                      const product = currentProduct;
                      const quantity = currentQuantity.current;
                      if (product && quantity) {
                        setOrderItems((prev) => [
                          ...prev,
                          { product, quantity },
                        ]);

                        setValue("order_items", [
                          ...getValues("order_items"),
                          { product_id: product.id, quantity },
                        ]);
                        trigger("order_items");
                      }
                    }}
                  />
                </HStack>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <FilledSecondaryButton mr={3} onClick={onClose}>
                Close
              </FilledSecondaryButton>
              <OutlineSecondaryButton
                mr={3}
                onClick={handleSubmit(onDraftSubmit)}
              >
                Create Draft
              </OutlineSecondaryButton>
              <OutlinePrimaryButton
                type="submit"
                disabled={!isValid}
                isLoading={createState.fetching}
                onClick={handleSubmit(onSubmit)}
              >
                Create Order
              </OutlinePrimaryButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default AddOrderFormButton;
