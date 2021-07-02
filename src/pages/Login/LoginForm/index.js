import React from "react";
import { Stack, Flex, Heading, Box } from "@chakra-ui/react";

import { PhoneAuth } from "@components";

export default function LoginForm() {
  return (
    <Flex minH={"calc(100vh - 64px)"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"}>
        <Heading fontSize={"xl"} textAlign="center">
          Login to your account
        </Heading>
        <Box
          border="1px"
          minW="300px"
          py={10}
          px={5}
          rounded="lg"
          borderColor="gray.300"
        >
          <PhoneAuth />
        </Box>
      </Stack>
    </Flex>
  );
}
