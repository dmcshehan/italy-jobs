import React from "react";
import { Stack, Box } from "@chakra-ui/react";

import { Container } from "@containers";
import { Sidebar } from "@components";

const WidthSidebar = ({ children }) => {
  return (
    <Container>
      <Stack direction={{ base: "row" }}>
        <Sidebar />
        <Box py={4}>{children}</Box>
      </Stack>
    </Container>
  );
};

export default WidthSidebar;
