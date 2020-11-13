import React from "react";

import FormInputPatternFullName from "./FormInputPatternFullName";
import FormInputSwitch from "./FormInputSwitch";
import FormInputFinalButton from "./FormInputFinalButton";

export default function ResetPasswordForm({
  handlePasswordReset,
  fullName,
  setFullName,
  setHasAcceptedTermsOfUse,
}) {
  return (
    <form
      id="ResetPasswordForm"
      className="col-10 col-md-6"
      onSubmit={handlePasswordReset}
    >
      <FormInputPatternFullName content={fullName} setContent={setFullName} />
      <FormInputSwitch
        setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
        labelContent="Estou ciente que a senha antiga será substituída"
        propertyID="switchForNewPassword"
      />
      <FormInputFinalButton callToAction={"Solicitar Nova Senha"} />
    </form>
  );
}
