import { isAxiosError } from "axios";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import $api, { setAuthorizationHeader } from "./api";

import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from "~/utilities/auth";

export type AuthResponse = {
  token: string;
};

export class AuthApi {
  private static instance: AuthApi;

  private constructor() {}

  public static getInstance(): AuthApi {
    if (!this.instance) {
      this.instance = new AuthApi();
    }
    return this.instance;
  }

  public isLoggedIn = (): boolean => {
    const accessToken = getAccessToken();

    if (!accessToken) {
      return false;
    }

    const decodedToken = jwt.decode(accessToken, { complete: true });

    if (!decodedToken) {
      return false;
    }

    const expireAt = new Date(
      ((decodedToken.payload as JwtPayload).exp ?? 0) * 1000,
    );
    const isExpired = expireAt < new Date();

    if (isExpired) {
      this.logout();
      return false;
    }

    return true;
  };

  public logout = (): void => {
    removeAccessToken();
  };

  public login = async (email: string, password: string): Promise<void> => {
    try {
      const response = await $api.post<AuthResponse>("/auth", {
        email,
        password,
      });

      const accessToken = response.data.token;

      setAccessToken(accessToken);
      setAuthorizationHeader(accessToken);
    } catch (err: unknown) {
      if (isAxiosError(err) && err.response) {
        const { status } = err.response;

        switch (status) {
          case 400:
            throw new Error("Invalid credentials");
          case 401:
            throw new Error("Invalid credentials");
          default:
            throw new Error("Something went wrong");
        }
      }
      throw err;
    }
  };
}
