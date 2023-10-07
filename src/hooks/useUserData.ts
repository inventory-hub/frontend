import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "~/stores/auth-store";

type UserState =
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

const useUserData = (): UserState => {
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => Promise.resolve({}),
  });
  const isLoggedIn = useAuthStore((state) => !!state.data);

  return { isLoggedIn, isLoading, user: data } as UserState;
};

export default useUserData;
