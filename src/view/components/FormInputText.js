import React from "react";
import { validateFullText } from "../../model/businessRules/validateFullText";

export default function FormInputText({
  title,
  tip,
  content,
  setContent,
  placeholder,
  propertyID,
  typingValidation = (e) => setContent(e.target.value),
  laterValidation = validateFullText(setContent)
}) {
  return (
    <div className="form-group">
      <label htmlFor={propertyID}>{title}</label>
      <input
        type="text"
        className="form-control"
        id={propertyID}
        aria-describedby={`${propertyID}Help`}
        placeholder={placeholder}
        value={content}
        onChange={typingValidation}
        onBlur={laterValidation}
      />
      <small id={`${propertyID}Help`} className="form-text text-muted h5">
        {tip}
      </small>
    </div>
  );
}

