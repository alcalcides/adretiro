import React from "react";
import { useHistory } from "react-router-dom";

import LogoMinified from "./LogoMinified";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "../styles/MenuMinified.css";

export default function MenuMinified({ pages, userName = null, bgColor, variantColor }) {
  const history = useHistory();

  function goToPage(slug) {
    return (e) => {
      e.preventDefault();
      history.push(slug);
    };
  }

  return (
    <Navbar collapseOnSelect expand="md" bg={bgColor} variant={variantColor}>
      <Navbar.Brand className={`col-6 col-md-2${bgColor === "dark" ? ' bg-white border' : ""}`}>
        <LogoMinified />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="col-8">
        <Nav className="ml-auto">
          {pages.map((page) => (
            <Nav.Link
              key={page.title}
              onClick={goToPage(!! userName? `../${page.slug}/${userName}` : page.slug)}
              className="menuMinifiedItem"
              title={page.title}
              disabled={`/${page.slug}` === document.location.pathname}
            >
              {page.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
