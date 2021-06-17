import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: "Work Sans",
    body: "Inter",
  },
};

const theme = extendTheme({ ...config });

export default theme;
