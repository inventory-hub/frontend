import { Checkbox, CheckboxGroup, Flex, Skeleton } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { type UseQueryExecute } from "urql";

import { Order_States_Enum, Roles_Enum } from "~/generated/graphql";
import { useOrdersFiltersStore } from "~/stores/orders-filters-store";
import { orderStateTranslations } from "~/utilities/orders";
import AddOrderFormButton from "./add-order-form-button";

type Props = { refetchOrders: UseQueryExecute };

const OrderTableControls = ({ refetchOrders }: Props) => {
  const { data, status } = useSession();
  const states = useOrdersFiltersStore(({ states }) => states);
  const setStates = useOrdersFiltersStore(({ setStates }) => setStates);
  const isLoading = status === "loading";
  const isCreationAuthorised =
    data?.user?.role === Roles_Enum.Admin ||
    data?.user?.role === Roles_Enum.Manager;

  return (
    <Skeleton isLoaded={!isLoading} w="auto">
      <Flex
        color="primary.main"
        gap={2}
        p={2}
        w="auto"
        visibility={isCreationAuthorised || isLoading ? "visible" : "hidden"}
      >
        <CheckboxGroup defaultValue={states} onChange={setStates}>
          {[
            Order_States_Enum.Draft,
            Order_States_Enum.AwaitingApproval,
            Order_States_Enum.Completed,
            Order_States_Enum.Cancelled,
          ].map((state) => (
            <Checkbox key={state} value={state}>
              {orderStateTranslations[state]}
            </Checkbox>
          ))}
        </CheckboxGroup>
        <AddOrderFormButton ml="auto" refetchOrders={refetchOrders} />
      </Flex>
    </Skeleton>
  );
};

export default OrderTableControls;
