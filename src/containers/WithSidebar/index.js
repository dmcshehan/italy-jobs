import React from "react";
import { Stack } from "@chakra-ui/react";

import { Container } from "@containers";
import { Sidebar } from "@components";

const WidthSidebar = ({ children }) => {
  return (
    <Container>
      <Stack direction={{ base: "row" }}>
        <Sidebar />
        <div>{children}</div>
      </Stack>
    </Container>
  );
};

export default WidthSidebar;
