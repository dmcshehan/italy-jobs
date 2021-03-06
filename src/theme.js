import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: "Rubik",
    body: "Rubik",
  },
  components: {
    Link: {
      baseStyle: {
        color: "blue.400",
      },
    },
    Button: {
      defaultProps: {
        size: "sm",
      },
    },
    Input: {
      defaultProps: {
        size: "sm",
      },
    },
    Textarea: {
      defaultProps: {
        size: "sm",
      },
    },
    Select: {
      defaultProps: {
        size: "sm",
      },
    },
    FormLabel: {
      defaultProps: {
        fontWeight: "bold",
      },
    },
    NumberInput: {
      defaultProps: {
        size: "sm",
      },
    },
  },
};

const theme = extendTheme({ ...config });

export default theme;
