import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = (childran) => {
  const isLoggedin = JSON.parse(localStorage.getItem("LoginUserData"));

  if (isLoggedin) {
    return <Outlet>{childran}</Outlet>;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default PrivateRoute;
