import { type FormEventHandler, useEffect, useMemo, useRef } from "react";
import {
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  AlertTitle,
  HStack,
  ListItem,
  UnorderedList,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { gql } from "graphql-request";
import { type UseQueryExecute, useMutation, useQuery } from "urql";

import {
  type GetOrderItemsStockQuery,
  type GetOrderItemsStockQueryVariables,
  type CompleteOrderMutation,
  type GetOrdersQuery,
  type CompleteOrderMutationVariables,
} from "~/generated/graphql";
import {
  FilledSecondaryButton,
  GhostPrimaryButton,
  OutlinePrimaryButton,
} from "~/components/ui/buttons";

const COMPLETE_ORDER_MUTATION = gql`
  mutation CompleteOrder($id: uuid!) {
    complete_order(data: { id: $id }) {
      id
    }
  }
`;

const GET_ORDER_ITEMS_STOCK_QUERY = gql`
  query GetOrderItemsStock($orderId: uuid!) {
    orders_items(where: { order_id: { _eq: $orderId } }) {
      product {
        id
        name
        quantity
        imageUrl
      }
      count
    }
  }
`;

type Props = {
  order: GetOrdersQuery["orders"][number];
  refetchOrders: UseQueryExecute;
};

const CompleteOrderFormButton = ({ order, refetchOrders }: Props) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const leastDestructiveRef = useRef<HTMLButtonElement>(null);

  const [{ data: orderItemsStockData, fetching }] = useQuery<
    GetOrderItemsStockQuery,
    GetOrderItemsStockQueryVariables
  >({
    query: GET_ORDER_ITEMS_STOCK_QUERY,
    variables: {
      orderId: order.id,
    },
  });

  const orderItemsWithPreviewStock = useMemo(
    () =>
      orderItemsStockData?.orders_items?.map((orderItem) => {
        const product = orderItem.product;

        return {
          ...orderItem,
          previewStock: product.quantity - orderItem.count,
        };
      }) ?? [],
    [orderItemsStockData]
  );

  const orderItemsWithInsufficientStock = useMemo(
    () =>
      orderItemsWithPreviewStock.filter(
        (orderItem) => orderItem.previewStock < 0
      ),
    [orderItemsWithPreviewStock]
  );

  const [completeOrderState, completeOrder] = useMutation<
    CompleteOrderMutation,
    CompleteOrderMutationVariables
  >(COMPLETE_ORDER_MUTATION);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    completeOrder({
      id: order.id,
    });
  };

  useEffect(() => {
    if (!completeOrderState.data) {
      return;
    }

    toast({
      title: `Completed order successfully`,
      status: "success",
    });
    refetchOrders();
  }, [completeOrderState.data, refetchOrders, toast]);

  return (
    <>
      <GhostPrimaryButton onClick={onOpen}>Complete</GhostPrimaryButton>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={leastDestructiveRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent as="form" onSubmit={handleSubmit}>
            <AlertDialogCloseButton />
            <AlertDialogHeader>Complete Order</AlertDialogHeader>
            <AlertDialogBody minH={40}>
              {orderItemsWithInsufficientStock?.length ? (
                <Alert status="error">
                  <AlertTitle as={HStack}>
                    <AlertIcon />{" "}
                    <span>The following products have insufficient stock:</span>
                  </AlertTitle>
                  <AlertDescription as={UnorderedList}>
                    {orderItemsWithInsufficientStock.map((oi) => (
                      <ListItem key={oi.product.id}>
                        {oi.product.name} (
                        {`${oi.count} / ${oi.product.quantity}`})
                      </ListItem>
                    ))}
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert status="warning" as={VStack}>
                  <AlertTitle as={HStack}>
                    <AlertIcon />{" "}
                    <span>
                      After completing this order, the stocks will be the
                      following:
                    </span>
                  </AlertTitle>
                  <AlertDescription as={UnorderedList} alignSelf="flex-start">
                    {orderItemsWithPreviewStock.map((oi) => (
                      <ListItem key={oi.product.id}>
                        {oi.product.name}: {oi.previewStock}
                      </ListItem>
                    ))}
                  </AlertDescription>
                </Alert>
              )}
            </AlertDialogBody>
            <AlertDialogFooter>
              <FilledSecondaryButton
                ref={leastDestructiveRef}
                onClick={onClose}
              >
                Cancel
              </FilledSecondaryButton>
              <OutlinePrimaryButton
                disabled={!!orderItemsWithInsufficientStock?.length || fetching}
                isLoading={completeOrderState.fetching}
                type="submit"
                ml={3}
              >
                Complete
              </OutlinePrimaryButton>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CompleteOrderFormButton;
