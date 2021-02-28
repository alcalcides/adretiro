import React from "react";
import { Route } from "react-router-dom";

import Home from "../../view/pages/home";
import AcessarMinhaConta from "../../view/pages/acessarMinhaConta";
import FazerCadastro from "../../view/pages/fazerCadastro";
import RedefinirSenha from "../../view/pages/redefinirSenha";
import AcessoAdministrativo from "../../view/pages/admin/acessoAdministrativo";
import ResetPassword from "../../view/pages/resetPassword";

export default function PublicRoutes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/acessar-minha-conta" component={AcessarMinhaConta} />
      <Route path="/fazer-cadastro" component={FazerCadastro} />
      <Route path="/redefinir-senha" component={RedefinirSenha} />
      <Route path="/acesso-administrativo" component={AcessoAdministrativo} />
      <Route path="/reset-password" component={ResetPassword} />
    </>
  );
}
