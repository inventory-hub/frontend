import MainLayout from "~/components/main-layout";
import UserSearch from "~/components/team/UserSearch";

const TeamPage = () => {
  return (
    <MainLayout pageName="Team" headerContent={<UserSearch />}>
      <h1>Team</h1>
    </MainLayout>
  );
};

export default TeamPage;
