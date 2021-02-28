import React, { useState } from "react";
import { requestPasswordRecovery } from "../../model/services/requestPasswordRecovery";

import ResetPasswordOrderForm from "./ResetPasswordOrderForm";

export default function ResetPasswordOrder() {
  const [username, setUsername] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  async function handlePasswordReset(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    try {
      const response = await requestPasswordRecovery(username);
      if (response.success === false) throw new Error(response.message);
      alert("Link de recuperação de senha enviado por email.");
      
    } catch (err) {
      console.log(err);
      alert("Reset Password Order Error ", err.message);
    }
  }

  return (
    <ResetPasswordOrderForm
      handlePasswordReset={handlePasswordReset}
      username={username}
      setUsername={setUsername}
      setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
    />
  );
}
