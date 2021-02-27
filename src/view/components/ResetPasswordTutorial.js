import React from "react";
import ResetPassword from "./ResetPassword";

import "../styles/ResetPasswordTutorial.css"

export default function ResetPasswordTutorial() {
  return (
    <div className="row no-gutters col-10 col-md-6" id="ResetPasswordTutorial">
      <p className="col-12">
        1) Solicite envio de email com o link para redefinição de senha
      </p>
      <div className="col-12">
        <ResetPassword />
      </div>
      <p className="col-12">
        2) Acessar seu email e clicar para redefinir a senha
      </p>
      <p className="col-12">3) Digitar a nova senha</p>
      <p className="col-12">
        4) Tudo ok! Pode acessar sua conta com a nova senha
      </p>
    </div>
  );
}
