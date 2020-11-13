import React from "react";

import FormInputPhoneNumber from "./FormInputPhoneNumber";

export default function FormInputPatternPhoneNumber({
  content,
  setContent,
  propertyID,
}) {
  return (
    <FormInputPhoneNumber
      content={content}
      setContent={setContent}
      propertyID={propertyID}
      title="WhatsApp"
    />
  );
}
