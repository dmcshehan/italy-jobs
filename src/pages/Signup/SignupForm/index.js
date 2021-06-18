import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Box,
  Flex,
  Heading,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { GoogleButton, FacebookButton } from "@components";
import { Container } from "@containers";

import { auth, authProviders } from "@fire";

const { GoogleAuthProvider, FacebookAuthProvider } = authProviders;

export default function SignupForm() {
  const signup = (provider) => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        console.log(user);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

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
            <Heading fontSize={"4xl"}>Create your account</Heading>
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
                  <GoogleButton onClick={() => signup(GoogleAuthProvider)}>
                    Google
                  </GoogleButton>
                  <FacebookButton onClick={() => signup(FacebookAuthProvider)}>
                    Facebook
                  </FacebookButton>
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

                <Button colorScheme={"teal"}>Signup</Button>
                <Text fontSize={"sm"} color={"gray.600"} textAlign="center">
                  Already have an account?{" "}
                  <Link as={RouterLink} to="/login">
                    Login
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
