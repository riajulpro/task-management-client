import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/Authentication";

// eslint-disable-next-line react/prop-types
const Private = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return "Please wait...";
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} />;
};

export default Private;
