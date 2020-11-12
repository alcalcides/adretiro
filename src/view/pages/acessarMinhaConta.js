import React from "react";

import MainMenuMinified from "../components/MainMenuMinified";
import LoginUser from "../components/LoginUser";

export default function AcessarMinhaConta() {
  return (
    <div id="AcessarMinhaConta">
      <MainMenuMinified currentSlugsPage="acessar-minha-conta" />
      <h2 className="publicPageTitle">Acessa Minha Conta</h2>
      <main className="row no-gutters justify-content-center">
        <LoginUser />
      </main>
    </div>
  );
}
