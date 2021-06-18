import React from "react";
import { Button, Text, Center } from "@chakra-ui/react";

import { FaFacebook } from "react-icons/fa";

export default function FacebookButton({ children, ...restProps }) {
  return (
    <Button
      w={"full"}
      maxW={"md"}
      variant={"outline"}
      colorScheme={"facebook"}
      leftIcon={<FaFacebook />}
      {...restProps}
    >
      <Center>
        <Text>{children}</Text>
      </Center>
    </Button>
  );
}
