import React from "react";

import MainMenuMinified from "../components/MainMenuMinified";
import ResetPassaword from "../components/ResetPassword";

export default function SolicitarNovaSenha() {
  return (
    <div id="SolicitarNovaSenha">
      <MainMenuMinified currentSlugsPage="solicitar-nova-senha" />
      <h2 className="publicPageTitle">Solicitar Nova Senha</h2>
      <main className="row no-gutters justify-content-center">
        <ResetPassaword />
      </main>
    </div>
  );
}
