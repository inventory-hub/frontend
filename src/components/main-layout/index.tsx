import { type ChakraProps, chakra, Flex } from "@chakra-ui/react";
import { type PropsWithChildren } from "react";

import SideBar from "./side-bar";
import Header from "./Header";

type Props = PropsWithChildren<ChakraProps> & {
  pageName: string;
};

const MainLayout = ({ pageName, ...props }: Props) => {
  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" minH="100vh" flexGrow={1}>
        <Header pageName={pageName} />
        <chakra.main p="1rem" flexGrow={1} {...props} />
      </Flex>
    </Flex>
  );
};

export default MainLayout;
