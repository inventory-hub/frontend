import { create } from "zustand";
import { persist } from "zustand/middleware";
import { decodeJwt } from "~/utilities/auth";

type JWTData = {
  exp: number;
  iat: number;
  sub: string;
  username: string;
};

type AuthState =
  | {
      refreshToken: string;
      accessToken: string;
      data: JWTData;
    }
  | {
      refreshToken: null;
      accessToken: null;
      data: null;
    };

type AuthActions = {
  setTokens: ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => void;
  logout(): void;
};

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      refreshToken: null,
      accessToken: null,
      data: null,
      setTokens: ({ accessToken, refreshToken }) => {
        const data = decodeJwt<JWTData>(accessToken);

        set({
          refreshToken,
          accessToken,
          data,
        });
      },
      logout() {
        set({
          refreshToken: null,
          accessToken: null,
          data: null,
        });
      },
    }),
    {
      name: "auth-state",
      getStorage: () => localStorage,
    },
  ),
);
