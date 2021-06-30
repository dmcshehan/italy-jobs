import React from "react";
import { Button, Text, Center } from "@chakra-ui/react";

import { FcPhoneAndroid } from "react-icons/fc";

export default function PhoneButton({ children, ...restProps }) {
  return (
    <Button
      size={"sm"}
      w={"full"}
      maxW={"md"}
      variant="outline"
      leftIcon={<FcPhoneAndroid />}
      {...restProps}
    >
      <Center>
        <Text>{children}</Text>
      </Center>
    </Button>
  );
}
