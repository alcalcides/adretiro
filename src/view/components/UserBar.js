import React, { useContext } from "react";
import { AuthContext } from "../../model/contexts/auth";

import UserName from "./UserName";

export default function UserBar() {
  const { handleLogOut } = useContext(AuthContext);
  return (
    <div className="userBar sticky-top d-flex justify-content-end align-items-center p-2">
      <UserName />
      <button className="btn btn-light btn-sm ml-3" onClick={handleLogOut}>
        Sair
      </button>
    </div>
  );
}
