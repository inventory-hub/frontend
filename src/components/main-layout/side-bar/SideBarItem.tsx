import { Box, Flex, Icon, type FlexProps } from "@chakra-ui/react";
import { type IconType } from "react-icons";

interface SideBarItemProps extends FlexProps {
  icon: IconType;
  children: string;
}

const SideBarItem = ({ icon, children, ...props }: SideBarItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      color="primary.text"
      style={{ textDecoration: "none" }}
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
    </Box>
  );
};

export default SideBarItem;
