import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { useParams } from "react-router-dom";
import useGoTo from "../../controller/hooks/useGoTo";

import { AuthContext } from "../../model/contexts/auth";

export default function NavbarItens({ pages }) {
  const { goTo } = useGoTo();
  const { username } = useParams();
  const { isAuthenticated } = useContext(AuthContext);

  function goToPage(slug) {
    return (e) => {
      e.preventDefault();
      goTo(slug);
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
            isAuthenticated ? `../${page.slug}/${username}` : page.slug
          )}
        >
          {page.title}
        </Nav.Link>
      ))}
    </Nav>
  );
}

function areYouAlreadyHere(page) {
  const thisURL = document.location.pathname;
  const thisPage = thisURL.split("/")[1];
  return page.slug === thisPage;
}
