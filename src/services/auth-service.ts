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
