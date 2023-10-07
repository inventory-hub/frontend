import { createContext, useCallback, useMemo } from "react";
import { AuthApi } from "~/pages/api/auth.api";

import type { PropsWithChildren } from "react";

export type AuthContextType = {
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  isLoggedIn: boolean;
  loading?: boolean;
};

const initialAuthContext: AuthContextType = {
  logout: () => null,
  login: () => Promise.resolve(),
  isLoggedIn: false,
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

export const AuthProvider: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const authApi = AuthApi.getInstance();
  const isLoggedIn = authApi.isLoggedIn();

  const login = useCallback(
    async (email: string, password: string) => {
      await authApi.login(email, password);
    },
    [authApi],
  );

  const logout = useCallback(() => {
    authApi.logout();
  }, [authApi]);

  const contextValue = useMemo<AuthContextType>(
    () => ({ login, logout, isLoggedIn }),
    [login, logout, isLoggedIn],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthContext.displayName = "AuthContext";
AuthProvider.displayName = "AuthProvider";

export default AuthContext;
