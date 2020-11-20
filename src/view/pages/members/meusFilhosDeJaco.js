import React from "react";

import { membersPages } from "../../../model/adminAssets.json";

import MenuMinified from "../../components/MenuMinified";

export default function MeusFilhosDeJaco() {
  const userName = "userteste";
  return (
    <div id="MeusFilhosDeJaco">
      <MenuMinified
        pages={membersPages}
        userName={userName}
        bgColor="dark"
        variantColor="dark"
      />
      <h2 className="memberAreaPageTitle">Meus filhos de Jacó</h2>
      <main>Content</main>
      <button>CTA</button>
    </div>
  );
}
