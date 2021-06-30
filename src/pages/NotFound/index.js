import React from "react";
import { Heading } from "@chakra-ui/react";

import { Layout } from "@containers";

export default function NotFound() {
  return (
    <Layout>
      <Heading as="h4" size="sm">
        Not Found
      </Heading>
    </Layout>
  );
}
