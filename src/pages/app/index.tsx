import MainLayout from "~/components/main-layout";
import { Box } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <MainLayout pageName="Dashboard">
      <Box h="100%">App</Box>
    </MainLayout>
  );
};

export default MainPage;
