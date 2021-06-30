import React from "react";

import { Flex, Heading, Image, Stack, Text, Box } from "@chakra-ui/react";

import { Container } from "@containers";
import lady_working from "@images/online_exam.jpg";

export default function HomeHero() {
  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={"center"}
        justify={"center"}
        minH={"calc(100vh - 60px)"}
      >
        <Stack w={"full"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              Prepare for your scholership exam
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              in seconds
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Write hight quality exam target model questions papers online and
            practise for the exam. Very affordable and 100% results gurenteed.
          </Text>
          {/* <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button colorScheme={"teal"}>Create Project</Button>
          </Stack> */}
        </Stack>
        <Box rounded={"lg"} width={"full"} overflow={"hidden"}>
          <Image alt={"Login Image"} objectFit={"cover"} src={lady_working} />
        </Box>
      </Flex>
    </Container>
  );
}
