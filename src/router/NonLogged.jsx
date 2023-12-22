import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/Authentication";

// eslint-disable-next-line react/prop-types
const NonLogged = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return <Navigate to={location.state ? location.state : "/"} />;
  }

  if (loading) {
    return "Please wait...";
  }

  return children;
};

export default NonLogged;
