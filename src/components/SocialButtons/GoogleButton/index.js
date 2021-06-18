import React from "react";
import { Button, Text, Center } from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ children }) {
  return (
    <Button w={"full"} maxW={"md"} variant={"outline"} leftIcon={<FcGoogle />}>
      <Center>
        <Text>{children}</Text>
      </Center>
    </Button>
  );
}
