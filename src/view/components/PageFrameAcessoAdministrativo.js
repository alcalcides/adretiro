import React from "react";

import { mainPublicPages } from "../../model/adminAssets.json";

import MenuMinified from "./MenuMinified";
import LoginUserAdmin from "./LoginUserAdmin";
import Footer from "./Footer";

export default function PageFrameAcessoAdministrativo() {
  return (
    <div id="AcessarMinhaContaAdministrativa">
      <MenuMinified pages={mainPublicPages}/>
      <h2 className="publicPageTitle">Acesso Administrativo</h2>
      <main className="row no-gutters justify-content-center">
        <LoginUserAdmin />
      </main>
      <Footer />
    </div>
  );
}
