import React from "react";
import Navbar from "react-bootstrap/Navbar";

import NavbarBrand from "./NavbarBrand";
import NavbarItens from "./NavbarItens";

import "../styles/MenuMinified.css";

export default function MenuMinified({
  pages,
  userName = null,
  bgColor,
  variantColor,
}) {
  return (
    <Navbar collapseOnSelect expand="md" bg={bgColor} variant={variantColor}>
      <NavbarBrand bgColor={bgColor} />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="col-8">
        <NavbarItens pages={pages} userName={userName} />
      </Navbar.Collapse>
    </Navbar>
  );
}
