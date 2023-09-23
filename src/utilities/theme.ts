import { extendTheme } from "@chakra-ui/react";

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
      main: "#242424",
      light: "#4a4a4a",
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
  },
});
