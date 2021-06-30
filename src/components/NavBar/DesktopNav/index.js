import React from "react";
import { useSelector } from "react-redux";
import { useFirebase, isEmpty } from "react-redux-firebase";

import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Stack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Avatar,
  Link,
} from "@chakra-ui/react";

import { FaCaretDown } from "react-icons/fa";

export default function DesktopNav() {
  const auth = useSelector((state) => state.firebase.auth);
  const firebase = useFirebase();

  console.log(auth.photoURL);

  return (
    <Box w="100%">
      <Stack
        justify={"flex-end"}
        direction={"row"}
        align={"center"}
        spacing={6}
      >
        {isEmpty(auth) && (
          <>
            <Button as={RouterLink} size={"sm"} variant={"link"} to="/login">
              Login
            </Button>

            <Button
              as={Link}
              size={"sm"}
              variant={"outline"}
              colorScheme={"whatsapp"}
              to={"/signup"}
            >
              Sign Up
            </Button>
          </>
        )}
        {!isEmpty(auth) && (
          <Menu placement="bottom-end" gutter={2}>
            <MenuButton as={Button} rightIcon={<FaCaretDown />} variant="link">
              <Avatar size={"sm"} src={auth.photoURL} />
            </MenuButton>
            <MenuList fontSize="sm" minW="150px">
              <MenuItem py={1} as={RouterLink} to="/profile">
                Your Profile
              </MenuItem>
              <MenuItem
                py={1}
                onClick={() => {
                  firebase.logout();
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Stack>
    </Box>
  );
}
