import React from "react";
import { Button, Text, Center } from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ children, ...restProps }) {
  return (
    <Button
      size={"sm"}
      w={"full"}
      maxW={"md"}
      leftIcon={<FcGoogle />}
      variant="outline"
      {...restProps}
    >
      <Center>
        <Text>{children}</Text>
      </Center>
    </Button>
  );
}
