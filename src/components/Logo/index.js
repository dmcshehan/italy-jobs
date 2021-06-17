import React from "react";
import { Link } from "react-router-dom";
import logo_black from "@images/logo_black.png";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo_black} alt="Logo Black" />
    </Link>
  );
}
