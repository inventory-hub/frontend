import type Roles from "~/enums/Roles";
import { api } from "~/utilities/api";

export type UserData = {
  id: number;
  username: undefined; // TODO: use string when backend is updated
  firstName: string;
  lastName: string;
  email: string;
  role: number;
  createdAt: undefined;
};

export const getUserData = async (userId: string | number) =>
  api.get<UserData>(`/users/${userId}`).then(({ data }) => data);

export type InviteUserData = {
  email: string;
  firstName: string;
  lastName: string;
  role: Roles;
};

export const inviteUser = async (data: InviteUserData) =>
  api.post(`/users/invite`, data).then(({ data }) => data);
