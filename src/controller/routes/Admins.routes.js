import React from "react";
import { Route, Routes } from "react-router-dom";
import PainelCentral from "../../view/pages/admin/painelCentral";
import Contribuintes from "../../view/pages/admin/contribuintes";
import Contribuicoes from "../../view/pages/admin/contribuicoes";
import Brindes from "../../view/pages/admin/brindes";

export default function MembersRoutes() {

  return (
    <Routes>
      <Route path="/painel-central/:username" element={<PainelCentral />}/>
      <Route path="/contribuintes/:username" element={<Contribuintes />}/>
      <Route path="/contribuicoes/:username" element={<Contribuicoes />}/>
      <Route path="/brindes/:username" element={<Brindes />}/>
    </Routes> 
  );
}
