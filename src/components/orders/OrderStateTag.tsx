import { Tag, TagLabel, type TagProps } from "@chakra-ui/react";
import { memo } from "react";
import { type Order_States_Enum } from "~/generated/graphql";
import { orderStateTranslations } from "~/utilities/orders";

type Props = TagProps & {
  state: Order_States_Enum;
};

const OrderStateTag = ({ state, children, ...props }: Props) => (
  <Tag
    color={`status.${state}.text`}
    backgroundColor={`status.${state}.bg`}
    border="1px solid"
    borderColor={`status.${state}.text`}
    w="fit-content"
    py={1}
    px={5}
    fontSize="0.85rem"
    rounded="full"
    {...props}
  >
    <TagLabel>{orderStateTranslations[state]}</TagLabel>
    {children}
  </Tag>
);

export default memo(OrderStateTag);
