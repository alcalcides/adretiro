import React, { useContext } from "react";
import { AuthContext } from "../../model/contexts/auth";

export default function UserName() {
  const { user } = useContext(AuthContext);

  return (
    <span className="h6 mb-0">{user.username}</span>
  );
}
