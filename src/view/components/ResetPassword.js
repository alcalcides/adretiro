import React, { useState } from "react";

import ResetPasswordForm from "./ResetPasswordForm";

export default function ResetPassword() {
  const [fullName, setFullName] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  function handlePasswordReset(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    console.log({
      fullName,
      hasAcceptedTermsOfUse,
    });

    alert(`Em construção.`);
  }

  return (
    <ResetPasswordForm
      handlePasswordReset={handlePasswordReset}
      fullName={fullName}
      setFullName={setFullName}
      setHasAcceptedTermsOfUse={setHasAcceptedTermsOfUse}
    />
  );
}
