import React from "react";

import { mainPublicPages } from "../../model/adminAssets.json";

import MenuMinified from "./MenuMinified";
import LoginUser from "./LoginUser";
import Footer from "./Footer";

export default function PageFrameAcessarMinhaConta() {
  return (
    <div id="AcessarMinhaConta">
      <MenuMinified pages={mainPublicPages}/>
      <h2 className="publicPageTitle">Acessar Minha Conta</h2>
      <main className="row no-gutters justify-content-center">
        <LoginUser />
      </main>
      <Footer />
    </div>
  );
}
