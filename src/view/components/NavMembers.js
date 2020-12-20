import React, { useContext } from "react";
import { AuthContext } from "../../model/contexts/auth";

import TitleMembers from "./TitleMembers";
import UserName from "./UserName";

export default function NavMembers() {
  const { handleLogOut } = useContext(AuthContext);
  return (
    <span className="row no-gutters bg-dark d-flex py-2 justify-content-between align-items-center">
      <div className="col-9 d-flex justify-content-center px-1">
        <TitleMembers />
      </div>
      <div className="col-3 d-flex justify-content-end pr-3 align-items-center">
        <div className="row no-gutters">
          <div className="col-12 text-right" style={{lineHeight: "1rem"}}>
            <UserName />
          </div>
          <div className="col-12 text-right">
            <button className="btn btn-light btn-sm ml-3" onClick={handleLogOut}>
              Sair
            </button>
          </div>
        </div>
      </div>
    </span>
  );
}
