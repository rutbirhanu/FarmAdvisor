import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  if (localStorage.getItem("token")) {
    return <Outlet/>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
