import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import type { AuthContextType } from "~/context/AuthProvider";
import AuthContext from "~/context/AuthProvider";

type AuthState =
  | {
      isLoggedIn: true;
      isLoading: false;
      user: any;
    }
  | {
      isLoggedIn: false;
      isLoading: false;
      user: null;
    }
  | {
      isLoggedIn: false;
      isLoading: true;
      user: null;
    };

const useAuth = (): AuthState => {
  const router = useRouter();
  const context = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsLoggedIn(context.isLoggedIn);
    setLoading(false);
  }, [context.isLoggedIn]);

  const logout = useCallback(() => {
    context.logout();
    setIsLoggedIn(false);
    void router.push("/login");
  }, []);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return { ...context, logout, isLoggedIn, loading };
};

export default useAuth;
