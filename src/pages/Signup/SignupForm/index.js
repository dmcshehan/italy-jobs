import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Stack, Box, Flex, Heading, Text, Link } from "@chakra-ui/react";

import { Container } from "@containers";
import { AuthModule } from "@components";

export default function SignupForm() {
  return (
    <Flex minH={"calc(100vh - 60px)"} align={"center"} justify={"center"}>
      <Container>
        <Stack spacing={8} maxW={"sm"} mx={"auto"}>
          <Stack align={"center"}>
            <Heading fontSize={"2xl"}>Create your account</Heading>
          </Stack>
          <Box rounded={"lg"} border="1px" borderColor="gray.300" p={8}>
            <Stack spacing={4}>
              <AuthModule />

              <Text fontSize={"sm"} color={"gray.600"} textAlign="center">
                Already have an account?{" "}
                <Link as={RouterLink} to="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}
