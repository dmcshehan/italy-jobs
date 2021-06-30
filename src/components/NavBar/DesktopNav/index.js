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
          <Menu>
            <MenuButton>
              <Avatar size={"sm"} src={auth.photoURL} />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem
                  onClick={() => {
                    firebase.logout();
                  }}
                >
                  Logout
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        )}
      </Stack>
    </Box>
  );
}
