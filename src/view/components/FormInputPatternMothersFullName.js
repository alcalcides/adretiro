import React from "react";

import FormInputText from "./FormInputText";

export default function FormInputPatternMothersFullName({
  content,
  setContent,
  propertyID,
}) {
  return (
    <FormInputText
      title="Nome Completo de Sua Mãe"
      tip="Evite abreviações."
      placeholder="Nome Completo"
      content={content}
      setContent={setContent}
      propertyID={propertyID}
    />
  );
}
