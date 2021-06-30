import React from "react";
import { Container } from "@chakra-ui/react";

export default function ContainerComponent({ children, ...restProps }) {
  return (
    <Container maxW="1280px" {...restProps}>
      {children}
    </Container>
  );
}
