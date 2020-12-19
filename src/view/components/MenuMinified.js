import React from "react";
import Navbar from "react-bootstrap/Navbar";

import NavbarBrand from "./NavbarBrand";
import NavbarItens from "./NavbarItens";

import "../styles/MenuMinified.css";

export default function MenuMinified({ pages }) {
  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <NavbarBrand />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="col-8">
        <NavbarItens pages={pages} />
      </Navbar.Collapse>
    </Navbar>
  );
}
