import { Navigate } from "react-router-dom";

const NonLogged = ({ children }) => {
  const user = "Jisan future Developer";

  if (!user) {
    return <Navigate to="/"></Navigate>;
  }

  return children;
};

export default NonLogged;
