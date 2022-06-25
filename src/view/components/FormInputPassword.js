import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function FormInputPassword({
  password,
  setPassword,
  labelContent,
  propertyID,
  tip = "Use de 8 a 25 caracteres alfanuméricos. Banco de dados seguro: todas as senhas são criptografadas",
}) {
  const [visible, setVisible] = useState(false);

  function togleVisibility() {
    setVisible(!visible);
    if (document.getElementById(propertyID).type === "password") {
      document.getElementById(propertyID).type = "text";
    } else {
      document.getElementById(propertyID).type = "password";
    }
  }

  return (
    <div className="form-group row no-gutters">
      <label htmlFor={propertyID} className="col-12">
        {labelContent}
      </label>
      <input
        type="password"
        className="form-control col-10"
        id={propertyID}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength="8"
        maxLength="25"
        required
        autoComplete="new-password"
      />
      
      {!visible && <FaEye className="col-2" onClick={togleVisibility} />}
      {visible && <FaEyeSlash className="col-2" onClick={togleVisibility} />}

      <small id={`${propertyID}Help`} className="form-text text-muted h5">
        {tip}
      </small>
    </div>
  );
}
