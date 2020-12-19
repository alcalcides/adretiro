import React from "react";

import LogoMinified from "./LogoMinified";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarBrand() {
  return (
    <Navbar.Brand className={`col-6 col-md-2`} >
      <LogoMinified />
    </Navbar.Brand>
  );
}
