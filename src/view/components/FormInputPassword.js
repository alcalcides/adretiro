import React from "react";

export default function FormInputPassword({
  password,
  setPassword,
  labelContent,
  propertyID,
  tip = "Use de 8 a 25 caracteres alfanuméricos. Banco de dados seguro: todas as senhas são criptografadas",
}) {
  return (
    <div className="form-group">
      <label htmlFor={propertyID}>{labelContent}</label>
      <input
        type="password"
        className="form-control"
        id={propertyID}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength="8"
        maxLength="25"
        required
      />
      <small id={`${propertyID}Help`} className="form-text text-muted h5">
        {tip}
      </small>
    </div>
  );
}
