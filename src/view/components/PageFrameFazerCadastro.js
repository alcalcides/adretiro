import React from "react";

import { mainPublicPages } from "../../model/adminAssets.json";

import MenuMinified from "./MenuMinified";
import SignUp from "./SignUp";
import Footer from "./Footer";

export default function PageFrameFazerCadastro() {
  return (
    <div id="AcessarMinhaConta">
      <MenuMinified pages={mainPublicPages} bgColor="light" variantColor="light"/>
      <h2 className="publicPageTitle">Fazer Cadastro</h2>
      <main className="row no-gutters justify-content-center">
        <SignUp />
      </main>
      <Footer/>
    </div>
  );
}
