import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../view/pages/home";
import AcessarMinhaConta from "../view/pages/acessarMinhaConta";
import FazerCadastro from "../view/pages/fazerCadastro";
import SolicitarNovaSenha from "../view/pages/solicitarNovaSenha";
import MeusFilhosDeJaco from "../view/pages/members/meusFilhosDeJaco";
import MeuPerfil from "../view/pages/members/meuPerfil";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/acessar-minha-conta" component={AcessarMinhaConta} />
        <Route path="/fazer-cadastro" component={FazerCadastro} />
        <Route path="/solicitar-nova-senha" component={SolicitarNovaSenha} />

        <Route path="/meus-filhos-de-jaco/:userName" component={MeusFilhosDeJaco} />
        <Route path="/meu-perfil/:userName" component={MeuPerfil} />
      </Switch>
    </BrowserRouter>
  );
}
