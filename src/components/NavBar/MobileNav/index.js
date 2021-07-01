import React from "react";
import { useSelector } from "react-redux";
import { useFirebase, isEmpty } from "react-redux-firebase";

import { Box, VStack, Divider, Button } from "@chakra-ui/react";
import { MenuLink } from "@components";
import { Container } from "@containers";

export default function MobileNav({ closeMenu }) {
  const auth = useSelector((state) => state.firebase.auth);
  const firebase = useFirebase();

  return (
    <Box
      borderBottom="2px solid"
      borderColor="gray.200"
      boxShadow="md"
      bg="gray.50"
      top="60px"
      left={0}
      right={0}
      position="absolute"
      zIndex={99}
      py={"10px"}
    >
      <Container>
        <Box my={2} display={{ base: "block", lg: "none" }}>
          <VStack align="flex-start">
            {!isEmpty(auth) ? (
              <>
                {" "}
                <MenuLink to="/profile">Your Profile</MenuLink>
                <MenuLink to="/add-listing">Add Listing</MenuLink>
                <MenuLink to="/my-listings">My Listing</MenuLink>
                <Divider />
                <Button
                  variant="link"
                  size="sm"
                  fontWeight="normal"
                  color="black"
                  onClick={() => firebase.logout()}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <MenuLink to="/login">Login</MenuLink>
              </>
            )}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
