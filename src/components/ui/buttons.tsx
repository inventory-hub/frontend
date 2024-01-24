import { Button } from "@chakra-ui/react";
import { type ComponentProps } from "react";

const filledSecondaryButtonBaseProps = {
  bgColor: "secondary.main",
  color: "secondary.text",
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

const outlineSecondaryButtonBaseProps = {
  variant: "outline",
  color: "secondary.main",
  borderColor: "secondary.main",
  _hover: {
    borderColor: "secondary.hover",
    color: "secondary.hover",
  },
  focusBorderColor: "secondary.focus",
};

export const OutlineSecondaryButton = (
  props: ComponentProps<typeof Button>
) => <Button {...outlineSecondaryButtonBaseProps} {...props} />;

const ghostPrimaryButtonBaseProps = {
  variant: "ghost",
  bgColor: "primary.main",
  color: "white",
  _hover: {
    bgColor: "primary.hover",
    textDecoration: "none",
  },
  _focus: {
    bgColor: "primary.focus",
  },
};

export const GhostPrimaryButton = (props: ComponentProps<typeof Button>) => (
  <Button {...ghostPrimaryButtonBaseProps} {...props} />
);
