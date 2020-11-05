import React from "react";

import MainMenuItem from "./MainMenuItem";

export default function MainMenu() {
  return (
    <ul id="MainMenu" className="my-5 list-unstyled">
      <MainMenuItem label="Acessar Minha Conta" slug="entrar" />
      <MainMenuItem label="Fazer Cadastro" slug="/" />
      <MainMenuItem label="Solicitar Nova Senha" slug="/" />
    </ul>
  );
}
