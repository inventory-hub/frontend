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
  Button,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
} from "@chakra-ui/react";
import { type GetOrdersQuery } from "~/generated/graphql";

type Props = TableProps & {
  orders: GetOrdersQuery["orders"] | undefined;
};

const OrdersTable = ({ orders, ...props }: Props) => {
  return (
    <TableContainer>
      <Table bg="white" rounded="xl" {...props}>
        <Thead>
          <Tr>
            <Th w={16}>Id</Th>
            <Th w={12}>Items</Th>
            <Th w={32}>Created</Th>
            <Th w={32}>Updated</Th>
            <Th w={32}>State</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders?.map((order) => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>
                {order.orders_items.map((item) => {
                  return (
                    <Popover key={item.product.name} trigger="hover">
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
              </Td>
              <Td>{order.created_at.split("T")[0]}</Td>
              <Td>{order.updated_at.split("T")[0]}</Td>
              <Td>{order.state}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
