import { type NextPageWithLayout } from "../_app";
import { type ReactElement } from "react";
import MainLayout from "~/components/main-layout/MainLayout";
import { Box } from "@chakra-ui/react";

const MainPage: NextPageWithLayout = () => {
  return (
    <Box width="100vh" margin="auto">
      App
    </Box>
  );
};

MainPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default MainPage;
