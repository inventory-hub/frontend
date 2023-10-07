import axios from "axios";

import { API_URL } from "~/config/environment";
import { getAccessToken, removeAccessToken } from "~/utilities/auth";

import type { AxiosError, AxiosRequestConfig } from "axios";

const $api = axios.create({
  withCredentials: true,
  baseURL: "/mockJWT",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthorizationHeader = (token: string): void => {
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const accessToken = getAccessToken();

if (accessToken) {
  setAuthorizationHeader(accessToken);
}

$api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error: AxiosError) => {
    if (!error.config) {
      return Promise.reject(error);
    }
    const config: AxiosRequestConfig & { _retry?: boolean } = error.config;

    if (config.url !== "/auth" && error.response) {
      if (error.response.status === 401 && config._retry) {
        removeAccessToken();
        window.location.reload();
      }
    }

    return Promise.reject(error);
  },
);

export default $api;
