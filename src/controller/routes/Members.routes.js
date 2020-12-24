import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../../model/contexts/auth";

import MeusFilhosDeJaco from "../../view/pages/members/meusFilhosDeJaco";
import MeuPerfil from "../../view/pages/members/meuPerfil";
import MinhasContribuicoes from "../../view/pages/members/minhasContribuicoes";

export default function MembersRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Route path="/meus-filhos-de-jaco/:username" component={MeusFilhosDeJaco}/>
      <Route path="/minhas-contribuicoes/:username" component={MinhasContribuicoes} />
      <Route path="/meu-perfil/:username" component={MeuPerfil} />
      <Route path="/">
        <Redirect to={`/meus-filhos-de-jaco/${user.username}`}/>
      </Route>
    </>
  );
}
