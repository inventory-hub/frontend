import { Input, chakra } from "@chakra-ui/react";

export const PrimaryOutlineInput = chakra(Input, {
  baseStyle: {
    variant: "outline",
    color: "primary.outline",
    borderColor: "primary.outline",
    _hover: {
      borderColor: "primary.light",
    },
    focusBorderColor: "primary.light",
  },
});
