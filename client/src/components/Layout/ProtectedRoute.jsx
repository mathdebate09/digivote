import React from "react";

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return currentUser && currentUser.login && currentUser.login ?
      <Outlet />
    : <Navigate to={"/login"} />;
}
