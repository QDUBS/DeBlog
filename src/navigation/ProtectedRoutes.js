import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const auth = useSelector((state) => state.auth);

  // if (auth.account) {
  //   if (props.path === "/login") {
  //     return <Navigate to={"/"} replace />;
  //   }
  //   return <Route {...props} />;
  // } else if (!auth.account) {
  //   return <Navigate to={"/login"} />;
  // } else {
  //   return <div>Not found</div>;
  // }

  return auth.account ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
