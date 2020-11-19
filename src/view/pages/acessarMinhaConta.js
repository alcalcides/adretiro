import React from "react";

import { mainPublicPages } from "../../model/adminAssets.json";

import MenuMinified from "../components/MenuMinified";
import LoginUser from "../components/LoginUser";

export default function AcessarMinhaConta() {
  return (
    <div id="AcessarMinhaConta">
      <MenuMinified pages={mainPublicPages} bgColor="light" variantColor="light"/>
      <h2 className="publicPageTitle">Acessar Minha Conta</h2>
      <main className="row no-gutters justify-content-center">
        <LoginUser />
      </main>
    </div>
  );
}
