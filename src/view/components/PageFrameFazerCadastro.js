import React from "react";

import adminAssets from "../../model/adminAssets.json";

const { mainPublicPages } = adminAssets;

import MenuMinified from "./MenuMinified";
import SignUp from "./SignUp";
import Footer from "./Footer";

export default function PageFrameFazerCadastro() {
  return (
    <div id="AcessarMinhaConta">
      <MenuMinified pages={mainPublicPages}/>
      <h2 className="publicPageTitle">Fazer Cadastro</h2>
      <main className="row no-gutters justify-content-center">
        <SignUp />
      </main>
      <Footer/>
    </div>
  );
}
