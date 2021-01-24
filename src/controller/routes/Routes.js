import React, { useContext } from "react";

import { AuthContext } from "../../model/contexts/auth";

import MembersRoutes from "./Members.routes";
import AdminsRouters from "./Admins.routes";
import PublicRoutes from "./Public.routes";
import LoadingProgress from "../../view/components/LoadingProgress";

export default function Routes() {
  const { isAuthenticated, isAdmin, loading } = useContext(AuthContext);
  
  if (loading) {
    return <LoadingProgress />;
  } 
  else if (isAuthenticated && isAdmin) {
    return (
      <>
        <AdminsRouters />
        <MembersRoutes />
      </>
      )
  } 
  else if (isAuthenticated) {
    return <MembersRoutes />;
  } 
  else {
    return <PublicRoutes />;
  }
}
