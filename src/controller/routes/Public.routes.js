import React from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "../../view/pages/home";
import AcessarMinhaConta from "../../view/pages/acessarMinhaConta";
import FazerCadastro from "../../view/pages/fazerCadastro";
import SolicitarNovaSenha from "../../view/pages/solicitarNovaSenha";

export default function PublicRoutes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/acessar-minha-conta" component={AcessarMinhaConta} />
      <Route path="/fazer-cadastro" component={FazerCadastro} />
      <Route path="/solicitar-nova-senha" component={SolicitarNovaSenha} />
      <Redirect path="*" to="/" />
    </>
  );
}
