import React from "react";

import FormInputText from "./FormInputText";
import FormInputSwitch from "./FormInputSwitch";
import FormInputFinalButton from "./FormInputFinalButton";

export default function ResetPasswordForm({
  handlePasswordReset,
  username,
  setUsername,
  setHasAcceptedTermsOfUse,
}) {
  return (
    <form id="ResetPasswordForm" className="col-10 col-md-6" onSubmit={handlePasswordReset}>
      <FormInputText
        username={username}
        setUsername={setUsername}
        labelContent="Seu nome de identificação no sistema"
        propertyID="userNameForNewPassword"
      />
      <FormInputSwitch
        setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
        labelContent="Estou ciente que a senha antiga será substituída"
        propertyID="switchForNewPassword"
      />
      <FormInputFinalButton callToAction={"Solicitar Nova Senha"} />
    </form>
  );
}
