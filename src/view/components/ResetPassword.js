import React, { useState } from "react";
import { requestPasswordRecovery } from "../../model/services/requestPasswordRecovery";

import ResetPasswordForm from "./ResetPasswordForm";

export default function ResetPassword() {
  const [username, setUsername] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  async function handlePasswordReset(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    console.log({
      username,
      hasAcceptedTermsOfUse,
    });

    try {
      const response = await requestPasswordRecovery(username);
      if (response.success !== true) throw new Error(response.message);
      alert("Link de recuperação de senha enviado por email.");
      
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  }

  return (
    <ResetPasswordForm
      handlePasswordReset={handlePasswordReset}
      username={username}
      setUsername={setUsername}
      setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
    />
  );
}
