import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Stack, Link, Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Container } from "@containers";
import { PhoneAuth } from "@components";

export default function LoginForm() {
  return (
    <Flex minH={"calc(100vh - 64px)"} align={"center"} justify={"center"}>
      <Container>
        <Stack spacing={8} mx={"auto"}>
          <Heading fontSize={"xl"} textAlign="center">
            Login to your account
          </Heading>

          <Box>
            <PhoneAuth />
            <Text textAlign={"center"} fontSize={"sm"} mt={2}>
              Not a member?{" "}
              <Link as={RouterLink} to="signup">
                Signup
              </Link>
            </Text>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}
