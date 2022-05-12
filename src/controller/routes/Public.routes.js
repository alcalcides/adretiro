import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../view/pages/home";
import AcessarMinhaConta from "../../view/pages/acessarMinhaConta";
import FazerCadastro from "../../view/pages/fazerCadastro";
import RedefinirSenha from "../../view/pages/redefinirSenha";
import AcessoAdministrativo from "../../view/pages/admin/acessoAdministrativo";
import ResetPassword from "../../view/pages/resetPassword";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/acessar-minha-conta" element={<AcessarMinhaConta />} />
      <Route path="/fazer-cadastro" element={<FazerCadastro />} />
      <Route path="/redefinir-senha" element={<RedefinirSenha />} />
      <Route path="/acesso-administrativo" element={<AcessoAdministrativo />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
