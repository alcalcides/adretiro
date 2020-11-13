import React from "react";

export default function FormInputText({
  title,
  tip,
  content,
  setContent,
  propertyID,
}) {
  return (
    <div className="form-group">
      <label htmlFor={propertyID}>{title}</label>
      <input
        type="date"
        className="form-control"
        id={propertyID}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <small id={`${propertyID}Help`} className="form-text text-muted h5">
        {tip}
      </small>
    </div>
  );
}
