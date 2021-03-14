import React from "react";
import { Route } from "react-router-dom";
import PainelCentral from "../../view/pages/admin/painelCentral";
import Contribuintes from "../../view/pages/admin/contribuintes";
import Contribuicoes from "../../view/pages/admin/contribuicoes";

export default function MembersRoutes() {

  return (
    <>
      <Route path="/painel-central/:username" component={PainelCentral}/>
      <Route path="/contribuintes/:username" component={Contribuintes}/>
      <Route path="/contribuicoes/:username" component={Contribuicoes}/>
    </> 
  );
}
