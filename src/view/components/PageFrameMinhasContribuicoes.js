import React from "react";

import { membersPages } from "../../model/adminAssets.json";

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import NavMembers from "./NavMembers";
import Footer from "./Footer";

export default function PageFrameMinhasContribuicoes() {

  return (
    <div id="MeuPerfil">
      <UserBar/>
      <MenuMinified pages={membersPages}/>
      <NavMembers/>
      <main className="">
        <section>
          quanto, quando, quem recebeu
        </section>
        <section>
          <p>total = R$ 000000</p>
          <button>Solicitar Senha</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
