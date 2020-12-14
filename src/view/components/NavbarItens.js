import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import { AuthContext } from "../../model/contexts/auth";

export default function NavbarItens({ pages }) {
  const history = useHistory();
  const { isAuthenticated, user } = useContext(AuthContext);

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
          className="menuMinifiedItem"
          title={page.title}
          disabled={areYouAlreadyHere(page)}
          onClick={goToPage(
            isAuthenticated ? `../${page.slug}/${user.username}` : page.slug
          )}
        >
          {page.title}
        </Nav.Link>
      ))}
    </Nav>
  );
}

function areYouAlreadyHere(page) {
  const thisURL = document.location.pathname
  const thisPage = thisURL.split("/")[1];
  return page.slug === thisPage;
}

