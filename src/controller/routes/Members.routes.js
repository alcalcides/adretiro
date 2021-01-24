import React from "react";
import { Route } from "react-router-dom";

import MeusFilhosDeJaco from "../../view/pages/members/meusFilhosDeJaco";
import MeuPerfil from "../../view/pages/members/meuPerfil";
import MinhasContribuicoes from "../../view/pages/members/minhasContribuicoes";
import MinhasSenhas from "../../view/pages/members/minhasSenhas";

export default function MembersRoutes() {

  return (
    <>
      <Route path="/meus-filhos-de-jaco/:username" component={MeusFilhosDeJaco}/>
      <Route path="/minhas-contribuicoes/:username" component={MinhasContribuicoes} />
      <Route path="/minhas-senhas/:username" component={MinhasSenhas} />
      <Route path="/meu-perfil/:username" component={MeuPerfil} />
    </> 
  );
}
