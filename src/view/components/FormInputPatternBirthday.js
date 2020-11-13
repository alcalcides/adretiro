import React from "react";

import FormInputDate from "./FormInputDate";

export default function FormInputPatternBirthday({
  content,
  setContent,
  propertyID,
}) {
  return (
    <FormInputDate
      content={content}
      setContent={setContent}
      propertyID={propertyID}
      title="Data de Nascimento"
      tip="Não se preocupe... Todos nós estamos envelhecendo."
    />
  );
}
