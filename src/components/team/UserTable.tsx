import {
  Table,
  type TableProps,
  Th,
  Thead,
  Tbody,
  Tr,
  Td,
  Avatar,
  TableContainer,
  Checkbox,
} from "@chakra-ui/react";
import { type UserData } from "~/services/user-service";

type Props = TableProps & {
  users: UserData[];
};

const UserTable = ({ users, ...props }: Props) => {
  return (
    <TableContainer>
      <Table bg="white" rounded="xl" {...props}>
        <Thead>
          <Tr>
            <Th w={16}></Th>
            <Th w={16}></Th>
            <Th w={16}>Id</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th w={32}>Role</Th>
            <Th>Active?</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>
                <Checkbox borderColor="primary.main" />
              </Td>
              <Td>
                <Avatar size="sm" />
              </Td>
              <Td>{user.id}</Td>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td>{user.deletedAt !== null ? "Yes" : "No"}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
