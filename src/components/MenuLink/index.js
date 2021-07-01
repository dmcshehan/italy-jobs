import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Button } from "@chakra-ui/react";

export default function MenuLink({ children, ...restProps }) {
  return (
    <Button
      size={"sm"}
      fontWeight="normal"
      colorScheme="blue"
      as={RouterLink}
      variant={"link"}
      color="black"
      {...restProps}
    >
      {children}
    </Button>
  );
}
