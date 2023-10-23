import { useDisclosure, Box, Drawer, DrawerContent } from "@chakra-ui/react";
import SideBarContent from "./SideBarContent";
import MobileNav from "./MobileNav";

type SideBarProps = {
  children?: React.ReactNode;
  onSidebarLinkClick?: (pageName: string) => void;
};

const SideBar = (props: SideBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="white"
      height="100vh"
      width={60}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <SideBarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
        onSidebarLinkClick={props.onSidebarLinkClick}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SideBarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box>{props.children}</Box>
    </Box>
  );
};

export default SideBar;
