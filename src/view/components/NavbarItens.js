import React from "react";
import { useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function NavbarItens({ pages, userName }) {
  const history = useHistory();

  function goToPage(slug) {
    return (e) => {
      e.preventDefault();
      history.push(slug);
    };
  }

  return (
    <Nav className="ml-auto">
      {pages.map((page) => (
        <Nav.Link
          key={page.title}
          onClick={goToPage(
            !!userName ? `../${page.slug}/${userName}` : page.slug
          )}
          className="menuMinifiedItem"
          title={page.title}
          disabled={`/${page.slug}` === document.location.pathname}
        >
          {page.title}
        </Nav.Link>
      ))}
    </Nav>
  );
}
