import { memo } from "react";
import { Box, Flex, type BoxProps, Text, CloseButton } from "@chakra-ui/react";
import Image from "next/image";

import logoImage from "~/assets/images/logo.png";
import SideBarItem, { type ActionItem } from "./SideBarAction";
import { mohave } from "~/utilities/fonts";

type SideBarProps = BoxProps & {
  actionItems: ActionItem[];
  onClose: () => void;
};

const SideBarContent = ({ onClose, actionItems, ...props }: SideBarProps) => {
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

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {actionItems.map((item) => (
        <SideBarItem
          key={item.name}
          icon={item.icon}
          name={item.name}
          href={item.href}
        >
          {item.name}
        </SideBarItem>
      ))}
    </Box>
  );
};

export default memo(SideBarContent);
