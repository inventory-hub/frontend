import { useQuery } from "@tanstack/react-query";
import { type UserData, getUserData } from "~/services/user-service";
import { useAuthStore } from "~/stores/auth-store";

type UserState =
  | {
      isLoggedIn: true;
      isLoading: false;
      user: UserData;
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
  const storeData = useAuthStore((state) => state.data);
  const isLoggedIn = !!storeData;

  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserData(storeData!.id),
    enabled: isLoggedIn,
  });

  return {
    isLoggedIn,
    isLoading: isLoading && isLoggedIn,
    user: data,
  } as UserState;
};

export default useUserData;
