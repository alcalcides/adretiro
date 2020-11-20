import React from "react";

import { membersPages } from "../../../model/adminAssets.json";

import MenuMinified from "../../components/MenuMinified";
import SingUpUpdate from "../../components/SignUpUpdate";

export default function MeuPerfil() {
  const userName = "userteste";
  return (
    <div id="MeuPerfil">
      <MenuMinified
        pages={membersPages}
        userName={userName}
        bgColor="dark"
        variantColor="dark"
      />
      <h2 className="memberAreaPageTitle">Meu Perfil</h2>
      <main className="row no-gutters justify-content-center">
        <SingUpUpdate />
      </main>
    </div>
  );
}
