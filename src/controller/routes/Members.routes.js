import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../../model/contexts/auth";

import MeusFilhosDeJaco from "../../view/pages/members/meusFilhosDeJaco";
import MeuPerfil from "../../view/pages/members/meuPerfil";

export default function MembersRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Route path="/meus-filhos-de-jaco/:userName" component={MeusFilhosDeJaco}/>
      <Route path="/meu-perfil/:userName" component={MeuPerfil} />
      <Route path="/">
        <Redirect to={`/meus-filhos-de-jaco/${user.username}`}/>
      </Route>
    </>
  );
}
