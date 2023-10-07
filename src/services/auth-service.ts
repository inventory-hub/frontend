import { useAuthStore } from "~/stores/auth-store";
import { api } from "~/utilities/api";

export type AuthResponse = {
  refreshToken: string;
  accessToken: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

export const login = async (payload: LoginPayload) =>
  api.post<AuthResponse>("/auth", payload);

export const refresh = async () => {
  const { accessToken } = useAuthStore.getState();
  return api.post<AuthResponse>("/auth/refresh", { accessToken });
};
