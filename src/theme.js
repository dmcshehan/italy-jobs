import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: "Work Sans",
    body: "Inter",
  },
  components: {
    Link: {
      baseStyle: {
        color: "blue.400",
      },
    },
  },
};

const theme = extendTheme({ ...config });

export default theme;
