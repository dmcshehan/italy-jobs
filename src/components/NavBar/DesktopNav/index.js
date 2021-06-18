import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Box } from "@chakra-ui/react";

export default function DesktopNav() {
  return (
    <Box w="100%">
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"flex-end"}
        direction={"row"}
        spacing={6}
      >
        <Button
          as={Link}
          fontSize={"sm"}
          fontWeight={400}
          variant={"link"}
          to="/signin"
        >
          Login
        </Button>

        <Button
          as={Link}
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          variant={"solid"}
          colorScheme={"teal"}
          to={"/signup"}
        >
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
