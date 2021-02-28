import React from "react";

import "../styles/ResetPasswordForm.css";

import FormInputSwitch from "./FormInputSwitch";
import FormInputFinalButton from "./FormInputFinalButton";
import FormInputPassword from "./FormInputPassword";

export default function ResetPasswordForm({
  handlePasswordReset,
  password,
  setPassword,
  passwordCopy,
  setPasswordCopy,
  setHasAcceptedTermsOfUse
}) {
  return (
    <form
      id="ResetPasswordForm"
      className="publicForms col-10 col-md-6"
      onSubmit={handlePasswordReset}
    >
      <FormInputPassword
        password={password}
        setPassword={setPassword}
        propertyID="newPasswordInput"
        labelContent="Nova senha"
      />
      <FormInputPassword
        password={passwordCopy}
        setPassword={setPasswordCopy}
        propertyID="newPasswordInputCopy"
        labelContent="Confirmar digitação"
        tip=""
      />
      <FormInputSwitch
        setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
        labelContent="Estou ciente que a senha antiga será substituída"
        propertyID="switchForNewPassword"
      />
      <FormInputFinalButton callToAction="Atualizar Senha" />
    </form>
  );
}
