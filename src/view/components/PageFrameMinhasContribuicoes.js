import React from "react";

import { membersPages } from "../../model/adminAssets.json";

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import NavMembers from "./NavMembers";
import Footer from "./Footer";
import ButtonAnimated from "./ButtonAnimated";

export default function PageFrameMinhasContribuicoes() {
  return (
    <div id="MeuPerfil">
      <UserBar />
      <MenuMinified pages={membersPages} />
      <NavMembers />
      <main className="row no-gutters px-3">
        <section className="bg-success col-12 px-2">
          <p>status, quando, quanto, quem recebeu</p>
        </section>
        <section className="col-12">
          <p className="row no-gutters justify-content-center">Saldo: R$ 0</p>
          <div className="row no-gutters justify-content-center">
            <ButtonAnimated
              callToAction="Liberar Senhas"
              actionToPerform={() => { alert("em construção"); }}
              animation="myBig"
              specialStyles="myRed"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
