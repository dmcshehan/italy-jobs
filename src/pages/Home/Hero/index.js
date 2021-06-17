import React from "react";

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";

import { Container } from "@containers";
import lady_working from "@images/lady_working.jpg";

export default function HomeHero() {
  return (
    <Container>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align={"center"}
        justify={"center"}
        minH={"50vh"}
      >
        <Stack w={"full"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              Post your stuff
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              in seconds
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            This is a platform for sri lankas who live in Italy to share job
            vacancies, houses and vehicals that are for sale and rent.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button colorScheme={"teal"}>Create Project</Button>
          </Stack>
        </Stack>
        <Box rounded={"lg"} width={"full"} overflow={"hidden"}>
          <Image alt={"Login Image"} objectFit={"cover"} src={lady_working} />
        </Box>
      </Flex>
    </Container>
  );
}
