import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import { Logo } from "@components";
import { Container } from "@containers";

import DesktopNav from "./DesktopNav/";

export default function NavBar() {
  return (
    <Box bg={"gray.100"}>
      <Container>
        <Flex justify="space-between" align={"center"} py={2} minH={"64px"}>
          <Logo />
          <DesktopNav />
        </Flex>
      </Container>
    </Box>
  );
}
