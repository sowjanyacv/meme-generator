import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const t = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    gold: "#d3af37",
    grey: "#e5e5e5",
  },
} as const;

export const theme = extendTheme(t) as typeof baseTheme & typeof t;
