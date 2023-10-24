import { Flex, Icon, type FlexProps } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { type IconType } from "react-icons";
import { memo } from "react";

export type ActionItem = {
  icon?: IconType;
  href: string;
  name: string;
};

type SideBarItemProps = FlexProps & ActionItem;

const SideBarItem = ({ icon, href, children, ...props }: SideBarItemProps) => {
  return (
    <Link
      href={href}
      color="primary.text"
      textDecoration="none"
      _focus={{ boxShadow: "none" }}
      fontFamily="fonts.body"
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "primary.main",
          transition: "all .2s ease-in-out",
          color: "white",
        }}
        {...props}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          ></Icon>
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default memo(SideBarItem);
