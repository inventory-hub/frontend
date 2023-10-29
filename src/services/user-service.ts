import type Roles from "~/enums/Roles";
import { api } from "~/utilities/api";

export type UserData = {
  id: number;
  username: undefined; // TODO: use string when backend is updated
  firstName: string;
  lastName: string;
  email: string;
  role: Roles;
  createdAt: Date;
  deletedAt: Date | null;
};

export const getUserData = async (userId: string | number) =>
  api.get<UserData>(`/users/${userId}`).then(({ data }) => data);

export type UserFilters = {
  page?: number;
  pageSize?: number;
  search?: string;
};

export type UserListData = {
  users: UserData[];
  totalPages: number;
};

export const getUsers = async ({
  page = 1,
  pageSize = 10,
  search,
}: UserFilters) =>
  api
    .get<UserListData>(`/users`, {
      params: {
        page,
        pageSize,
        search,
      },
    })
    .then(({ data }) => data);
