import { type ChakraProps } from "@chakra-ui/react";
import { useState, type PropsWithChildren } from "react";
import { chakra } from "@chakra-ui/react";
import SideBar from "./side-bar/SideBar";
import Header from "./Header";

const MainLayout = (props: PropsWithChildren<ChakraProps>) => {
  const [selectedPage, setSelectedPage] = useState("");

  const handlePageChange = (pageName: string) => {
    setSelectedPage(pageName);
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar onSidebarLinkClick={handlePageChange} />
      <div style={{ flex: 1, position: "relative" }}>
        <Header pageName={selectedPage} /> {/* Header */}
        <chakra.main p="1rem" flexGrow={1} {...props} />
      </div>
    </div>
  );
};

export default MainLayout;
