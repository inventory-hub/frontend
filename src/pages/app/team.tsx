import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import MainLayout from "~/components/main-layout";
import UserSearch from "~/components/team/UserSearch";
import UserTable from "~/components/team/UserTable";
import UserTableControls from "~/components/team/UserTableControls";
import { getUsers } from "~/services/user-service";

const TeamPage = () => {
  const router = useRouter();
  const { search } = router.query;
  const usersQuery = useQuery({
    queryKey: ["users", `users:${search}`],
    queryFn: () => getUsers({ search: search as string }),
  });
  return (
    <MainLayout pageName="Team" headerContent={<UserSearch />}>
      <UserTableControls />
      <UserTable users={usersQuery.data?.users ?? []} />
    </MainLayout>
  );
};

export default TeamPage;
