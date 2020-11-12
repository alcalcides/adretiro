import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../view/pages/home";
import AcessarMinhaConta from "../view/pages/acessarMinhaConta";
import SolicitarNovaSenha from "../view/pages/solicitarNovaSenha";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/acessar-minha-conta" component={AcessarMinhaConta} />
        <Route path="/solicitar-nova-senha" component={SolicitarNovaSenha} />
      </Switch>
    </BrowserRouter>
  );
}
