import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { gql } from "graphql-request";
import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useMutation, type UseQueryExecute } from "urql";
import { SlOptionsVertical } from "react-icons/sl";

import CompleteOrderFormButton from "./CompleteOrderFormButton";
import {
  type ChangeOrderStateMutation,
  type ChangeOrderStateMutationVariables,
  type GetOrdersQuery,
  Roles_Enum,
  Order_States_Enum,
} from "~/generated/graphql";
import { GhostPrimaryButton } from "~/components/ui/buttons";

const CHANGE_ORDER_STATE_MUTATION = gql`
  mutation ChangeOrderState($id: uuid!, $state: order_states_enum!) {
    update_orders_by_pk(pk_columns: { id: $id }, _set: { state: $state }) {
      id
      state
    }
  }
`;

type Props = {
  order: GetOrdersQuery["orders"][number];
  refetchOrders: UseQueryExecute;
};

const EDIT_ORDER_LABEL = "Edit order";

const OrderOptions = ({ order, refetchOrders }: Props) => {
  const toast = useToast();
  const { data, status } = useSession();
  const isLoading = status === "loading";

  const [changeOrderStateState, changeOrderState] = useMutation<
    ChangeOrderStateMutation,
    ChangeOrderStateMutationVariables
  >(CHANGE_ORDER_STATE_MUTATION);

  useEffect(() => {
    if (!changeOrderStateState.data) {
      return;
    }

    toast({
      title: `Changed order state successfully`,
      status: "success",
    });
    refetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeOrderStateState.data, toast]);

  if (isLoading) {
    return <Spinner />;
  }

  const role = data?.user?.role!;

  const isAuthorized = role === Roles_Enum.Admin || role === Roles_Enum.Manager;
  const isFinalState =
    order.state === Order_States_Enum.Completed ||
    order.state === Order_States_Enum.Cancelled;
  if (!isAuthorized || isFinalState) {
    return null;
  }

  const getHandleStateChange = (state: Order_States_Enum) => () =>
    changeOrderState({
      id: order.id,
      state,
    });

  return (
    <Popover isLazy lazyBehavior="keepMounted">
      <PopoverTrigger>
        <IconButton
          bgColor="primary.main"
          color="primary.text"
          _hover={{
            bgColor: "primary.hover",
          }}
          aria-label={EDIT_ORDER_LABEL}
          icon={<SlOptionsVertical />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow bgColor="primary.main" />
        <PopoverContent bgColor="primary.main" color="primary.text">
          {order.state === Order_States_Enum.Draft && (
            <>
              <GhostPrimaryButton
                onClick={getHandleStateChange(
                  Order_States_Enum.AwaitingApproval
                )}
              >
                Move to awaiting approval
              </GhostPrimaryButton>
              <GhostPrimaryButton
                onClick={getHandleStateChange(Order_States_Enum.Cancelled)}
              >
                Cancel order
              </GhostPrimaryButton>
            </>
          )}
          {order.state === Order_States_Enum.AwaitingApproval && (
            <>
              <CompleteOrderFormButton
                order={order}
                refetchOrders={refetchOrders}
              />
              <GhostPrimaryButton
                onClick={getHandleStateChange(Order_States_Enum.Cancelled)}
              >
                Cancel order
              </GhostPrimaryButton>
            </>
          )}
        </PopoverContent>
      </PopoverContent>
    </Popover>
  );
};

export default OrderOptions;
