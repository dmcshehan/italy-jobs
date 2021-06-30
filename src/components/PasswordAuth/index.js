import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Checkbox,
  Link,
  Text,
} from "@chakra-ui/react";

export default function PasswordAuth() {
  return (
    <div>
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
    </div>
  );
}
