import React from "react";
import { Route, Routes } from "react-router-dom";

import MeusFilhosDeJaco from "../../view/pages/members/meusFilhosDeJaco";
import MeuPerfil from "../../view/pages/members/meuPerfil";
import MinhasContribuicoes from "../../view/pages/members/minhasContribuicoes";
import MinhasSenhas from "../../view/pages/members/minhasSenhas";

export default function MembersRoutes() {

  return (
    <Routes>
      <Route path="/meus-filhos-de-jaco/:username" element={<MeusFilhosDeJaco />}/>
      <Route path="/minhas-contribuicoes/:username" element={<MinhasContribuicoes />} />
      <Route path="/minhas-senhas/:username" element={<MinhasSenhas />} />
      <Route path="/meu-perfil/:username" element={<MeuPerfil />} />
    </Routes> 
  );
}
