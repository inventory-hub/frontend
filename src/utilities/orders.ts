import { Order_States_Enum } from "~/generated/graphql";

export const orderStateTranslations: Record<Order_States_Enum, string> = {
  [Order_States_Enum.AwaitingApproval]: "Awaiting Approval",
  [Order_States_Enum.Cancelled]: "Canceled",
  [Order_States_Enum.Completed]: "Completed",
  [Order_States_Enum.Draft]: "Draft",
};
