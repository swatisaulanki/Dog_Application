import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Contextsfetch  } from "./Contexts";

const RequireAuth = ({ children }) => {
  const { isAuth } = useContext(Contextsfetch);

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/register"/>;
  }
};

export default RequireAuth;