import { api } from "~/utilities/api";

export type UserData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: number;
};

export const getUserData = async (userId: string | number) =>
  api.get<UserData>(`/users/${userId}`).then(({ data }) => data);
