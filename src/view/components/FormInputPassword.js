import React from "react";

export default function FormInputPassword({ password, setPassword, labelContent, propertyID }) {
  return (
    <div className="form-group">
      <label htmlFor={propertyID}>{labelContent}</label>
      <input
        type="password"
        className="form-control"
        id={propertyID}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
