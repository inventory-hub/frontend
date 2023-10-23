import { Box, Flex, type BoxProps, Text, CloseButton } from "@chakra-ui/react";
import Image from "next/image";
import logoImage from "~/assets/images/logo.png";

import SideBarItem from "./SideBarItem";

import {
  MdOutlineSpaceDashboard,
  MdOutlineInbox,
  MdOutlineInventory2,
  MdPeopleOutline,
  MdOutlineAlarm,
} from "react-icons/md";
import { type IconType } from "react-icons";
import { mohave } from "~/utilities/fonts";

interface SideBarProps extends BoxProps {
  onClose: () => void;
  onSidebarLinkClick?: (pageName: string) => void;
}

type LinkItemProps = {
  name: string;
  icon: IconType;
  href: string;
};

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: MdOutlineSpaceDashboard, href: "/dashboard" },
  { name: "Seller Packages", icon: MdOutlineInbox, href: "/seller-packages" },
  { name: "Inventory", icon: MdOutlineInventory2, href: "/inventory" },
  { name: "Team", icon: MdPeopleOutline, href: "/team" },
  { name: "Alerts", icon: MdOutlineAlarm, href: "/alerts" },
];

const SideBarContent = ({
  onClose,
  onSidebarLinkClick,
  ...props
}: SideBarProps) => {
  return (
    <Box
      roundedRight="3xl"
      bg="primary.dark"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      fontWeight="300"
      {...props}
    >
      <Flex
        alignItems="baseline"
        mx="8"
        mt="10"
        mb="4"
        justifyContent="space-between"
      >
        <Image
          src={logoImage}
          alt="Inventory Hub logo"
          width={45}
          height={21}
        />

        <Text
          fontSize="xl"
          className={mohave.className}
          color="white"
          textTransform="uppercase"
        >
          Inventory Hub
        </Text>

        <CloseButton
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
        ></CloseButton>
      </Flex>
      {LinkItems.map((item) => (
        <SideBarItem
          key={item.name}
          icon={item.icon}
          onClick={() => {
            onSidebarLinkClick && onSidebarLinkClick(item.name);
          }}
        >
          {item.name}
        </SideBarItem>
      ))}
    </Box>
  );
};

export default SideBarContent;
