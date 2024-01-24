import { useEffect, useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { gql } from "graphql-request";
import { type UseQueryExecute, useMutation, useQuery } from "urql";

import {
  type GetOrderItemsStockQuery,
  type GetOrderItemsStockQueryVariables,
  type ChangeOrderStateMutationVariables,
  type CompleteOrderMutation,
  type GetOrdersQuery,
} from "~/generated/graphql";
import { GhostPrimaryButton } from "~/components/ui/buttons";

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

  const [completeOrderState, completeOrder] = useMutation<
    CompleteOrderMutation,
    ChangeOrderStateMutationVariables
  >(COMPLETE_ORDER_MUTATION);

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
          <AlertDialogContent>
            <AlertDialogBody>Placeholder</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default CompleteOrderFormButton;
