import React from "react";

import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

import { Container } from "@containers";

export default function HomeHero() {
  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={"center"}
        justify={"center"}
        py={10}
      >
        <Stack w={"full"}>
          <Heading fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              Find a job in Italy
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              In seconds
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "sm", lg: "lg" }} color={"gray.500"}>
            A website that is dedicated for <Text as="mark">Sri Lankanks</Text>{" "}
            who reside in Italy share infomation about available jobs.
          </Text>
        </Stack>
      </Flex>
    </Container>
  );
}
