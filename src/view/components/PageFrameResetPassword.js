import React from "react";

import adminAssets from "../../model/adminAssets.json";

const { mainPublicPages } = adminAssets;

import MenuMinified from "./MenuMinified";
import Footer from "./Footer";
import ResetPassword from "./ResetPassword";

export default function PageFrameResetPassword() {
  return (
    <div id="RedefinirSenha">
      <MenuMinified pages={mainPublicPages} />
      <h2 className="publicPageTitle">Atualizar Senha</h2>
      <main className="row no-gutters justify-content-center">
        <ResetPassword />
      </main>
      <Footer />
    </div>
  );
}
