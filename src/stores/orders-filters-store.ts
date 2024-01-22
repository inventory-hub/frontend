import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Order_States_Enum } from "../generated/graphql";

type OrdersFiltersState = {
  states: Order_States_Enum[];
};

type OrdersFiltersActions = {
  setStates: (states: Order_States_Enum[]) => void;
};

type OrdersFiltersStore = OrdersFiltersState & OrdersFiltersActions;

export const useOrdersFiltersStore = create<OrdersFiltersStore>()(
  persist(
    (set) => ({
      states: [
        Order_States_Enum.Draft,
        Order_States_Enum.AwaitingApproval,
        Order_States_Enum.Completed,
        Order_States_Enum.Cancelled,
      ],
      setStates: (states) => set({ states }),
    }),
    { name: "orders-filters" }
  )
);
