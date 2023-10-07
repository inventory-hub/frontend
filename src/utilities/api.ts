import axios from "axios";

import { API_URL } from "~/config/environment";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "~/stores/auth-store";
import { refresh } from "~/services/auth-service";

export const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
}, Promise.reject);

// in case this makes multiple refresh requests, fix race condition using a flag
api.interceptors.response.use(
  (response) => response,
  (
    error: AxiosError<
      unknown,
      {
        _retry?: boolean;
      }
    >,
  ) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    if (error.response?.status === 401 && !originalRequest._retry) {
      refresh().then((response) => {
        const { accessToken } = response.data;
        try {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;

          return api(originalRequest);
        } catch (err: unknown) {
          const queryParams = new URLSearchParams({
            returnUrl: window.location.pathname,
          });
          window.location.href = `/login?${queryParams.toString()}`;
          return Promise.reject(err);
        }
      });
    }
    return Promise.reject(error);
  },
);
