import React from "react";

import FormInputEmail from "./FormInputEmail";

export default function FormInputPatternBirthday({
  content,
  setContent,
  propertyID,
}) {
  return (
    <FormInputEmail
      content={content}
      setContent={setContent}
      propertyID={propertyID}
      title="Email"
    />
  );
}
