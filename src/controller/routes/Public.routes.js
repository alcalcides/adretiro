import React from "react";
import { Route } from "react-router-dom";

import Home from "../../view/pages/home";
import AcessarMinhaConta from "../../view/pages/acessarMinhaConta";
import FazerCadastro from "../../view/pages/fazerCadastro";
import SolicitarNovaSenha from "../../view/pages/solicitarNovaSenha";
import AcessoAdministrativo from "../../view/pages/admin/acessoAdministrativo";

export default function PublicRoutes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/acessar-minha-conta" component={AcessarMinhaConta} />
      <Route path="/fazer-cadastro" component={FazerCadastro} />
      <Route path="/solicitar-nova-senha" component={SolicitarNovaSenha} />
      <Route path="/acesso-administrativo" component={AcessoAdministrativo} />
    </>
  );
}
