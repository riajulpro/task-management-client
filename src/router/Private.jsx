import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  //   const user = "Jisan future Developer";
  const user = "";

  const location = useLocation();

  console.log(location.pathname);

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} />;
};

export default Private;
