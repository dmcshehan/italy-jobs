import React from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Logo } from "@components";
import { Container } from "@containers";

import DesktopNav from "./DesktopNav/";

export default function NavBar() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.100", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Container>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            align={"center"}
          >
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Logo />
            </Text>
            <DesktopNav />
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}
