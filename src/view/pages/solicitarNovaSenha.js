import React from "react";

import { mainPublicPages } from "../../model/adminAssets.json";

import MenuMinified from "../components/MenuMinified";
import ResetPassaword from "../components/ResetPassword";

export default function SolicitarNovaSenha() {
  return (
    <div id="SolicitarNovaSenha">
      <MenuMinified pages={mainPublicPages} bgColor="light" variantColor="light"/>
      <h2 className="publicPageTitle">Solicitar Nova Senha</h2>
      <main className="row no-gutters justify-content-center">
        <ResetPassaword />
      </main>
    </div>
  );
}
