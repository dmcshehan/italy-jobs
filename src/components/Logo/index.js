import React from "react";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo_black from "@images/logo.png";

export default function Logo({ props }) {
  return (
    <Link to="/">
      <Image src={logo_black} alt="Logo Black" w="130px" {...props} />
    </Link>
  );
}
