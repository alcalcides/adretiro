import React from "react";

export default function FormInputUserName({ username, setUsername }) {

  return (
    <div className="form-group">
      <label htmlFor="userName">Nome de identificação</label>
      <input
        type="text"
        className="form-control"
        id="userName"
        aria-describedby="userNameHelp"
        placeholder="Irmão Fulano"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <small id="userNameHelp" className="form-text text-muted h5">
        Seu nome de identificação no sistema
      </small>
    </div>
  );
}
