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
  PopoverBody,
} from "@chakra-ui/react";
import { type GetOrdersQuery } from "~/generated/graphql";
import OrderStateTag from "./OrderStateTag";

type Props = TableProps & {
  orders: GetOrdersQuery["orders"] | undefined;
};

const OrdersTable = ({ orders, ...props }: Props) => {
  return (
    <TableContainer>
      <Table bg="white" rounded="xl" {...props}>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Total Quantity</Th>
            <Th>Items</Th>
            <Th>Created</Th>
            <Th>Updated</Th>
            <Th>State</Th>
            <Th>Client</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders?.map((order) => (
            <Tr key={order.id}>
              <Td>
                <Checkbox borderColor="primary.main" />
              </Td>
              <Td>
                {order.orders_items
                  .map((oi) => oi.product.quantity)
                  .reduce((acc, q) => q + acc, 0)
                  .toString()}
              </Td>
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
                          <PopoverContent borderColor="primary.outline">
                            <PopoverArrow bgColor="primary.outline" />
                            <PopoverHeader>{item.product.name}</PopoverHeader>
                            <PopoverBody>
                              Quantity: {item.product.quantity}
                            </PopoverBody>
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
                <OrderStateTag state={order.state} />
              </Td>
              <Td fontWeight={600}>{order.client_name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
