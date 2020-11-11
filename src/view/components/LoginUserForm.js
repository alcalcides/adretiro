import React from "react";

import FormInputText from "./FormInputText";
import FormInputPassword from "./FormInputPassword";
import FormInputSwitch from "./FormInputSwitch";
import FormInputFinalButton from "./FormInputFinalButton";

export default function LoginUserForm({
  handleUserLogin,
  username,
  setUsername,
  password,
  setPassword,
  setHasAcceptedTermsOfUse,
}) {
  return (
    <form id="Login" className="col-10 col-md-6" onSubmit={handleUserLogin}>
      <FormInputText
        username={username}
        setUsername={setUsername}
        labelContent="Seu nome de identificação no sistema"
        propertyID="userName"
      />
      <FormInputPassword
        password={password}
        setPassword={setPassword}
        labelContent="Senha"
        propertyID="usersPassword"
      />
      <FormInputSwitch
        setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
        labelContent="Concordo com os termos de uso"
        propertyID="switchForTermsOfUse"
      />
      <FormInputFinalButton callToAction={"Acessar Minha Conta"} />
    </form>
  );
}
