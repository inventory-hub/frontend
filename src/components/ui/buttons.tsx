import { Button } from "@chakra-ui/react";
import { type ComponentProps } from "react";

const filledSecondaryButtonBaseProps = {
  bgColor: "secondary.main",
  _hover: {
    bgColor: "secondary.hover",
    textDecoration: "none",
  },
  _focus: {
    bgColor: "secondary.focus",
  },
};
export const FilledSecondaryButton = (props: ComponentProps<typeof Button>) => (
  <Button {...filledSecondaryButtonBaseProps} {...props} />
);

const filledPrimaryButtonBaseProps = {
  bgColor: "primary.main",
  _hover: {
    bgColor: "primary.hover",
    textDecoration: "none",
  },
  _focus: {
    bgColor: "primary.focus",
  },
};

export const FilledPrimaryButton = (props: ComponentProps<typeof Button>) => (
  <Button {...filledPrimaryButtonBaseProps} {...props} />
);
