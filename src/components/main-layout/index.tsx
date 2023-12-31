import { type ChakraProps, chakra, Flex } from "@chakra-ui/react";
import { type ReactNode, type PropsWithChildren } from "react";

import SideBar from "./side-bar";
import Header from "./header";
import Head from "next/head";

type Props = PropsWithChildren<ChakraProps> & {
  pageName: string;
  headerContent?: ReactNode;
};

const MainLayout = ({ pageName, headerContent, ...props }: Props) => {
  return (
    <>
      <Head>
        <title>{pageName}</title>
      </Head>
      <Flex fontFamily="fonts.body">
        <SideBar />
        <Flex flexDirection="column" minH="100vh" flexGrow={1}>
          <Header pageName={pageName}>{headerContent}</Header>
          <chakra.main p="1rem" flexGrow={1} {...props} />
        </Flex>
      </Flex>
    </>
  );
};

export default MainLayout;
