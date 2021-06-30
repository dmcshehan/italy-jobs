import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Button } from "@chakra-ui/react";

export default function MenuLink({ children, to }) {
  return (
    <Button
      size={"sm"}
      fontWeight="normal"
      colorScheme="blue"
      as={RouterLink}
      variant={"link"}
      to={to}
    >
      {children}
    </Button>
  );
}
