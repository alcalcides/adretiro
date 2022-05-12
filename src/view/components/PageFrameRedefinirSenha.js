import React from "react";

import adminAssets from "../../model/adminAssets.json";

const { mainPublicPages } = adminAssets;

import MenuMinified from "./MenuMinified";
import Footer from "./Footer";
import ResetPasswordTutorial from "./ResetPasswordTutorial";

export default function PageFrameRedefinirSenha() {
  return (
    <div id="RedefinirSenha">
      <MenuMinified pages={mainPublicPages}/>
      <h2 className="publicPageTitle">Redefinir Senha</h2>
      <main className="row no-gutters justify-content-center">
        <ResetPasswordTutorial />
      </main>
      <Footer />
    </div>
  );
}

