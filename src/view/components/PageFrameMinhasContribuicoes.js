import React from "react";

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import TitleMembersFrame from "./TitleMembersFrame";
import Footer from "./Footer";
import ButtonAnimated from "./ButtonAnimated";
import Contributions from "./Contributions";
import AccountBalance from "./AccountBalance";

import { membersPages } from "../../model/adminAssets.json";

export default function PageFrameMinhasContribuicoes() {
  return (
    <div id="MeuPerfil">
      <UserBar />
      <MenuMinified pages={membersPages} />
      <TitleMembersFrame />
      <main className="row no-gutters px-3">
        <section className="col-12">
          <Contributions/>
        </section>
        <section className="col-12 d-flex justify-content-center align-items-center my-3">
          <AccountBalance />
        </section>
        <section className="col-12">
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


