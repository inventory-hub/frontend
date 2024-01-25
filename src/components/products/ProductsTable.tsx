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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { type GetProductsOverviewQuery } from "~/generated/graphql";

type Props = TableProps & {
  products: GetProductsOverviewQuery["products"] | undefined;
};

const ProductsTable = ({ products, ...props }: Props) => {
  const router = useRouter();
  const url = router.pathname;
  return (
    <TableContainer>
      <Table bg="white" rounded="xl" {...props}>
        <Thead>
          <Tr>
            <Th w={20}></Th>
            <Th w={16}>Id</Th>
            <Th>Category</Th>
            <Th w={32}>Name</Th>
            <Th w={32}>Description</Th>
            <Th w={32}>Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products?.map((product) => (
            <Tr
              key={product.id}
              onClick={() => {
                router.push(`${url}/${product.hash_name}`);
              }}
              cursor="pointer"
              _hover={{ bg: "gray.100" }}
              transition="all 0.3s ease-in-out"
            >
              <Td>
                <Image
                  src={product.imageUrl}
                  alt="product image"
                  borderRadius="md"
                  shadow="md"
                  h="30px"
                  w="30px"
                  objectFit="contain"
                />
              </Td>
              <Td>{product.hash_name}</Td>
              <Td>{product.category.name}</Td>
              <Td>{product.name}</Td>
              <Td>{product.description}</Td>
              <Td>{product.quantity}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;
