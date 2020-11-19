import React from "react";

import { mainPublicPages } from "../../model/adminAssets.json";

import MenuMinified from "../components/MenuMinified";
import SignUp from "../components/SignUp";

export default function AcessarMinhaConta() {
  return (
    <div id="AcessarMinhaConta">
      <MenuMinified pages={mainPublicPages} bgColor="light" variantColor="light"/>
      <h2 className="publicPageTitle">Fazer Cadastro</h2>
      <main className="row no-gutters justify-content-center">
        <SignUp />
      </main>
    </div>
  );
}
