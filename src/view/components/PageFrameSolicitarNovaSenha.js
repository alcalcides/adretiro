import React from "react";

import { mainPublicPages } from "../../model/adminAssets.json";

import MenuMinified from "./MenuMinified";
import ResetPassword from "./ResetPassword";
import Footer from "./Footer";

export default function PageFrameSolicitarNovaSenha() {
  return (
    <div id="SolicitarNovaSenha">
      <MenuMinified
        pages={mainPublicPages}
        bgColor="light"
        variantColor="light"
      />
      <h2 className="publicPageTitle">Solicitar Nova Senha</h2>
      <main className="row no-gutters justify-content-center">
        <ResetPassword />
      </main>
      <Footer />
    </div>
  );
}
