import React from "react";

export default function FormInputPassword({ password, setPassword }) {
  return (
    <div className="form-group">
      <label htmlFor="usersPassword">Senha</label>
      <input
        type="password"
        className="form-control"
        id="usersPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
