import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Checkbox,
  Link,
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { GoogleButton, FacebookButton } from "@components";

import { Container } from "@containers";

export default function LoginForm() {
  return (
    <Flex
      minH={"calc(100vh - 60px)"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Container>
        <Stack spacing={8} maxW={"lg"} mx={"auto"}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Login to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form>
              <Stack spacing={4}>
                <Text fontSize={"lg"} color={"gray.600"} textAlign="center">
                  with your social network
                </Text>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  justify="space-between"
                >
                  <GoogleButton>Google</GoogleButton>
                  <FacebookButton>Facebook</FacebookButton>
                </Stack>
                <Text fontSize={"lg"} color={"gray.600"} textAlign="center">
                  or
                </Text>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    justify="space-between"
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link>Forgot password?</Link>
                  </Stack>
                </Stack>
                <Button colorScheme={"teal"}>Login</Button>
                <Text textAlign={"center"} fontSize={"sm"}>
                  Not a member?{" "}
                  <Link as={RouterLink} to="signup">
                    Signup
                  </Link>
                </Text>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}
