import React from "react";

import MainMenuMinified from "../components/MainMenuMinified";
import SignUp from "../components/SignUp";

export default function AcessarMinhaConta() {
  return (
    <div id="AcessarMinhaConta">
      <MainMenuMinified currentSlugsPage="fazer-cadastro" />
      <h2 className="publicPageTitle">Fazer Cadastro</h2>
      <main className="row no-gutters justify-content-center">
        <SignUp />
      </main>
    </div>
  );
}
