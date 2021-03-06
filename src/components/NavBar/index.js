import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

import { Logo } from "@components";
import { Container } from "@containers";

import NavMenu from "./NavMenu";

import Hamburger from "./Hamburger/";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Box bg={"gray.100"} boxShadow="sm">
        <Container>
          <Flex justify="space-between" align={"center"} py={2} minH={"60px"}>
            <Logo />
            <Hamburger menuOpen={menuOpen} onClick={toggleMenu} />
          </Flex>
        </Container>
      </Box>
      {menuOpen && <NavMenu closeMenu={toggleMenu} />}
    </>
  );
}
