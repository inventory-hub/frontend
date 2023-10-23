import { Flex, type FlexProps, IconButton, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { mohave } from "~/utilities/fonts";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...props }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg="primary.dark"
      borderBottomWidth="1px"
      borderBottomColor="primary.outline"
      justifyContent="flex-start"
      {...props}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text
        fontSize="2xl"
        ml="8"
        fontWeight="bold"
        className={mohave.className}
      >
        Inventory Hub
      </Text>
    </Flex>
  );
};

export default MobileNav;
