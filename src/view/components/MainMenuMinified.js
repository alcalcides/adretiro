import React from "react";
import { useHistory } from "react-router-dom";

import LogoMinified from "./LogoMinified";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { mainPublicPages } from "../../model/adminAssets.json";

import "../styles/MainMenuMinified.css";

export default function MainMenuMinified({ currentSlugsPage }) {
  const history = useHistory();

  function goToPage(slug) {
    return (e) => {
      e.preventDefault();
      history.push(slug);
    };
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Navbar.Brand className="col-6 col-md-2">
        <LogoMinified />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="col-8">
        <Nav className="ml-auto">
          {mainPublicPages.map((page) => (
            <Nav.Link
              key={page.title}
              onClick={goToPage(page.slug)}
              className="mainMenuMinifiedItem"
              title={page.title}
              disabled={('/' + page.slug) === document.location.pathname}
            >
              {page.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
