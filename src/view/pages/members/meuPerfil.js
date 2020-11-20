import React from "react";

import { membersPages } from "../../../model/adminAssets.json";

import MenuMinified from "../../components/MenuMinified";

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
      <main>Content</main>
      <button>CTA</button>
    </div>
  );
}
