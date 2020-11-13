import React from "react";

import FormInputPassword from "./FormInputPassword";
import FormInputSwitch from "./FormInputSwitch";
import FormInputFinalButton from "./FormInputFinalButton";
import FormInputPatternUserName from "./FormInputPatternUserName";

export default function LoginUserForm({
  handleUserLogin,
  username,
  setUsername,
  password,
  setPassword,
  setHasAcceptedTermsOfUse,
}) {
  return (
    <form id="LoginUserForm" className="col-10 col-md-6" onSubmit={handleUserLogin}>
      <FormInputPatternUserName   
        content={username}
        setContent={setUsername}
        propertyID="userNameForLogin"
      />
      <FormInputPassword
        password={password}
        setPassword={setPassword}
        labelContent="Senha"
        propertyID="usersPassword"
      />
      <FormInputSwitch
        setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
        labelContent="Concordo com os Termos de Uso"
        propertyID="switchForTermsOfUse"
      />
      <FormInputFinalButton callToAction={"Acessar Minha Conta"} />
    </form>
  );
}
