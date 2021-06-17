import React from "react";
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

import { Container } from "@containers";

export default function SignupForm() {
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
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form>
              <Stack spacing={4}>
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
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                </Stack>
                <Button colorScheme={"teal"}>Signup</Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
}