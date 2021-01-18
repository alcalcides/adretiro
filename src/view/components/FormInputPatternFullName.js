import React from "react";

import FormInputText from "./FormInputText";

export default function FormInputPatternFullName({
  content,
  setContent,
  propertyID,
}) {
  return (
    <FormInputText
      title="Nome Completo"
      tip="Seu nome completo sem abreviações."
      placeholder="Nome Completo da Silva"
      content={content}
      setContent={setContent}
      propertyID={propertyID}
    />
  );
}
