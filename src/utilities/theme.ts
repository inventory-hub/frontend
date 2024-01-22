import { extendTheme } from "@chakra-ui/react";
import { Order_States_Enum } from "~/generated/graphql";

export const theme = extendTheme({
  styles: {
    global: {
      "body, html": {
        backgroundColor: "primary.background",
      },
    },
  },
  fonts: {
    heading: "var(--font-mplus1p)",
    body: "var(--font-mplus1p)",
  },
  colors: {
    primary: {
      dark: "#242424",
      main: "#4a4a4a",
      hover: "#5c5c5c",
      focus: "#6d6d6d",
      text: "#b3b3b3",
      outline: "#8b8b8b",
      background: "#ececec",
      disabled: "#d9d9d9",
      form: "#f7f7f7",
    },
    secondary: {
      main: "#59a5ff",
      hover: "#7ab7ff",
      focus: "#8bc0ff",
    },
    accent: {
      main: "#7c4eff",
      hover: "#9671ff",
      focus: "#a383ff",
    },
    status: {
      [Order_States_Enum.Completed]: {
        text: "#43a054",
        bg: "#e9f5ec",
      },
      [Order_States_Enum.Draft]: {
        text: "#ded449",
        bg: "#f9fbe2",
      },
      [Order_States_Enum.Cancelled]: {
        text: "#fd4d4f",
        bg: "#ffe6e7",
      },
      [Order_States_Enum.AwaitingApproval]: {
        text: "#59a5ff",
        bg: "#d6e1ff",
      },
    },
  },
});
