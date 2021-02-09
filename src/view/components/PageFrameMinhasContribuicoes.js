import React, { useState } from "react";

import { membersPages } from "../../model/adminAssets.json";

import UserBar from "./UserBar";
import MenuMinified from "./MenuMinified";
import TitleMembersFrame from "./TitleMembersFrame";
import Footer from "./Footer";
import ButtonAnimated from "./ButtonAnimated";
import Contributions from "./Contributions";
import numberToMoney from "../../model/library/niceNumbers";

export default function PageFrameMinhasContribuicoes() {
  const [accountBallance] = useState(10.0);

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
          <p className="mb-0">Saldo: {numberToMoney(accountBallance)}</p>
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


