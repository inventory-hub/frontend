import type Roles from "~/enums/Roles";
import { api } from "~/utilities/api";

export type AuthResponse = {
  refreshToken: string;
  accessToken: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

/** @throws {AxiosError}*/
export const login = (payload: LoginPayload) =>
  api.post<AuthResponse>("/auth/login", payload).then(({ data }) => data);

/** @throws {AxiosError}*/
export const refresh = (refreshToken: string) =>
  api
    .post<AuthResponse>("/auth/refresh", { refreshToken })
    .then(({ data }) => data);

export type SignUpPayload = {
  token: string;
  username: string;
  password: string;
};

export const signUp = (payload: SignUpPayload) =>
  api.post<AuthResponse>("/auth/register", payload).then(({ data }) => data);

export type InviteUserData = {
  email: string;
  firstName: string;
  lastName: string;
  role: Roles;
};

export const inviteUser = async (data: InviteUserData) =>
  api.post(`/auth/invite`, data).then(({ data }) => data);
