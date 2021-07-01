import React from "react";
import { Icon } from "@chakra-ui/react";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

export default function Hamburger({ onClick, menuOpen }) {
  return (
    <div>
      <Icon
        as={menuOpen ? GrClose : VscMenu}
        boxSize={"25px"}
        onClick={onClick}
      />
    </div>
  );
}
