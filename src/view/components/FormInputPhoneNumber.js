import React from "react";
import InputMask from "react-input-mask";
import { fixPhoneNumber } from "../../model/businessRules/fixPhoneNumber";
import { validatePhoneNumber } from "../../model/businessRules/validatePhoneNumber";

export default function FormInputPhoneNumber({
  title,
  tip,
  content,
  setContent,
  propertyID,
}) {
  return (
    <div className="form-group">
      <label htmlFor={propertyID}>{title}</label>
      <InputMask
        type="tel"
        className="form-control"
        id={propertyID}
        value={content}
        mask="55 (99) 99999-9999"
        maskChar="_"
        alwaysShowMask={true}
        onChange={fixPhoneNumber(setContent)}
        onBlur={validatePhoneNumber(setContent)}
      />
      <small id={`${propertyID}Help`} className="form-text text-muted h5">
        {tip}
      </small>
    </div>
  );
}

