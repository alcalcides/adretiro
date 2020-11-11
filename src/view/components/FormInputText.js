import React from "react";

export default function FormInputText({
  username,
  setUsername,
  labelContent,
  propertyID,
}) {
  return (
    <div className="form-group">
      <label htmlFor={propertyID}>Nome de identificação</label>
      <input
        type="text"
        className="form-control"
        id={propertyID}
        aria-describedby={`${propertyID}Help`}
        placeholder="Irmão Fulano"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <small id={`${propertyID}Help`} className="form-text text-muted h5">
        {labelContent}
      </small>
    </div>
  );
}
