import React from "react";
import { useParams } from "react-router-dom";

export default function UserName() {
  const { username } = useParams();

  return <span className="h6 mb-0 username">{username}</span>;
}
