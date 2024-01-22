import {
  Table,
  type TableProps,
  Th,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Image,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  Checkbox,
  HStack,
  Text,
} from "@chakra-ui/react";
import { type GetOrdersQuery } from "~/generated/graphql";

type Props = TableProps & {
  orders: GetOrdersQuery["orders"] | undefined;
};

type OrderState = "draft" | "completed" | "awaitingapproval" | "cancelled";

const statusColors: Record<OrderState, { text: string; bg: string }> = {
  draft: {
    text: "status.draft.text",
    bg: "status.draft.bg",
  },
  completed: {
    text: "status.completed.text",
    bg: "status.completed.bg",
  },
  awaitingapproval: {
    text: "status.awaitingApproval.text",
    bg: "status.awaitingApproval.bg",
  },
  cancelled: {
    text: "status.canceled.text",
    bg: "status.canceled.bg",
  },
};

const OrdersTable = ({ orders, ...props }: Props) => {
  return (
    <TableContainer>
      <Table bg="white" rounded="xl" {...props}>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Count</Th>
            <Th>Items</Th>
            <Th>Created</Th>
            <Th>Updated</Th>
            <Th>State</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders?.map((order) => (
            <Tr key={order.id}>
              <Td>
                <Checkbox borderColor="primary.main" />
              </Td>
              <Td>{order.orders_items.length.toString()}</Td>
              <Td>
                <HStack spacing="24px">
                  {order.orders_items.map((item) => {
                    return (
                      <Popover key={item.product.id} trigger="hover">
                        <PopoverTrigger>
                          <Image
                            src={item.product.imageUrl}
                            alt="order product image"
                            borderRadius="md"
                            shadow="md"
                            h="30px"
                            w="30px"
                            objectFit="contain"
                          />
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>{item.product.name}</PopoverHeader>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                    );
                  })}
                </HStack>
              </Td>
              <Td>{order.created_at.split("T")[0]}</Td>
              <Td>{order.updated_at.split("T")[0]}</Td>
              <Td>
                <Text
                  color={
                    statusColors[order.state.toLowerCase() as OrderState]
                      ?.text || "black"
                  }
                  backgroundColor={
                    statusColors[order.state.toLowerCase() as OrderState]?.bg ||
                    "white"
                  }
                  w="fit-content"
                  py={1}
                  px={5}
                  fontSize="0.85rem"
                  borderRadius={50}
                >
                  {order.state}
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
