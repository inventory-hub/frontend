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
  color: "primary.text",
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

const outlinePrimaryButtonBaseProps = {
  variant: "outline",
  color: "primary.dark",
  borderColor: "primary.dark",
  _hover: {
    borderColor: "primary.main",
    color: "primary.main",
  },
  focusBorderColor: "primary.main",
};

export const OutlinePrimaryButton = (props: ComponentProps<typeof Button>) => (
  <Button {...outlinePrimaryButtonBaseProps} {...props} />
);
