import React, { useState } from "react";

import ResetPasswordForm from "./ResetPasswordForm";

export default function ResetPassword() {
  const [username, setUsername] = useState("");
  const [hasAcceptedTermsOfUse, setHasAcceptedTermsOfUse] = useState(false);

  function handlePasswordReset(e) {
    e.preventDefault();
    if (!hasAcceptedTermsOfUse) {
      return alert("Aceite os Termos de Uso");
    }

    console.log({
      username,
      hasAcceptedTermsOfUse,
    });

    alert(`Em construção.`);
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
