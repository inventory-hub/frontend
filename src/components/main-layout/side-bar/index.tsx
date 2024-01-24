import { useDisclosure, Box, Drawer, DrawerContent } from "@chakra-ui/react";
import SideBarContent from "./SideBarContent";
import MobileNav from "./MobileNav";
import { type ReactNode } from "react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineInbox,
  MdOutlineInventory2,
  MdPeopleOutline,
  MdOutlineAlarm,
} from "react-icons/md";
import { type ActionItem } from "./SideBarAction";

// could be role based or from api
const actionItems: ActionItem[] = [
  { name: "Dashboard", icon: MdOutlineSpaceDashboard, href: "/app" },
  {
    name: "Orders",
    icon: MdOutlineInbox,
    href: "/app/orders",
  },
  { name: "Products", icon: MdOutlineInventory2, href: "/app/products" },
  { name: "Team", icon: MdPeopleOutline, href: "/app/team" },
  { name: "Alerts", icon: MdOutlineAlarm, href: "/app/alerts" },
];

type SideBarProps = {
  children?: ReactNode;
};

const SideBar = (props: SideBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="white"
      minH="100vh"
      width={60}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <SideBarContent
        actionItems={actionItems}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
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
          <SideBarContent actionItems={actionItems} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box>{props.children}</Box>
    </Box>
  );
};

export default SideBar;
