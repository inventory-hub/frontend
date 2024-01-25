import { type ChakraProps, chakra, Flex, Box } from "@chakra-ui/react";
import { type ReactNode, type PropsWithChildren } from "react";

import SideBar from "./side-bar";
import Header from "./header";
import Head from "next/head";

type Props = PropsWithChildren<ChakraProps> & {
  pageName: string;
  headerContent?: ReactNode;
  back?: boolean;
};

const MainLayout = ({ pageName, headerContent, back, ...props }: Props) => {
  return (
    <>
      <Head>
        <title>{pageName}</title>
      </Head>
      <Flex fontFamily="fonts.body">
        <Box flexBasis={60}>
          <SideBar />
        </Box>
        <Flex flexDirection="column" minH="100vh" flexGrow={1}>
          <Header pageName={pageName} back={back}>
            {headerContent}
          </Header>
          <chakra.main p="1rem" flexGrow={1} {...props} />
        </Flex>
      </Flex>
    </>
  );
};

export default MainLayout;
