import React from "react";
import { Route } from "react-router-dom";

import MeusFilhosDeJaco from "../../view/pages/members/meusFilhosDeJaco";
import MeuPerfil from "../../view/pages/members/meuPerfil";

export default function MembersRoutes() {
  return (
    <>
      <Route path="/meus-filhos-de-jaco/:userName" component={MeusFilhosDeJaco}/>
      <Route path="/meu-perfil/:userName" component={MeuPerfil} />
    </>
  );
}
