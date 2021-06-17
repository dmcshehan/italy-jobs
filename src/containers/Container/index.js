import React from "react";
import { Container } from "@chakra-ui/react";

export default function ContainerComponent({ children, ...restProps }) {
  return (
    <Container maxW="container.lg" {...restProps}>
      {children}
    </Container>
  );
}
