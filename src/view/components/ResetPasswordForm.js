import React from "react";

import "../styles/ResetPasswordForm.css";

import FormInputSwitch from "./FormInputSwitch";
import FormInputFinalButton from "./FormInputFinalButton";
import FormInputPatternUserName from "./FormInputPatternUserName";

export default function ResetPasswordForm({
  handlePasswordReset,
  username,
  setUsername,
  setHasAcceptedTermsOfUse
}) {
  return (
    <form
      id="ResetPasswordForm"
      className="publicForms"
      onSubmit={handlePasswordReset}
    >
      <FormInputPatternUserName
        content={username}
        setContent={setUsername}
        propertyID="userNameForResetPassword"
        tip="Sua identificação no sistema"
      />
      <FormInputSwitch
        setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
        labelContent="Estou ciente que a senha antiga será substituída"
        propertyID="switchForNewPassword"
      />
      <FormInputFinalButton callToAction="Solicitar Redefinição de Senha" />
    </form>
  );
}
