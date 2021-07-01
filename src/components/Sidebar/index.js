import React from "react";
import { useSelector } from "react-redux";

import { Image, Text, Box, VStack, Divider } from "@chakra-ui/react";

import { MenuLink } from "@components";

export default function Sidebar() {
  const auth = useSelector((state) => state.firebase.auth);

  const { photoURL, displayName, email } = auth;

  return (
    <Box
      h={"calc(100vh - 64px)"}
      w={250}
      borderRight={"1px"}
      borderColor={"gray.300"}
      display={{ base: "none" }}
    >
      <Image
        my={2}
        src={photoURL}
        borderRadius="full"
        boxSize="100px"
        alt={displayName}
      />
      <Box mb={2}>
        <Text fontSize="xl">{displayName}</Text>
        <Text fontSize="sm">{email}</Text>
      </Box>
      <Divider />
      <Box my={2}>
        <VStack align="flex-start">
          <MenuLink to="/profile">Your Profile</MenuLink>
          <MenuLink to="/add-listing">Add Listing</MenuLink>
          <MenuLink to="/my-listings">My Listing</MenuLink>
        </VStack>
      </Box>
    </Box>
  );
}
