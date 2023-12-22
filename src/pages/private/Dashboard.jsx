import { Outlet } from "react-router-dom";
import DashboardMenu from "./DashboardMenu";
import { useContext } from "react";
import { AuthContext } from "../../context/Authentication";

const Dashboard = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return "Please wait...";
  }

  return (
    <div className="bg-gray-200 grid grid-cols-12">
      <div className="col-span-12 md:col-span-2">
        <DashboardMenu />
      </div>
      <div className="col-span-12 md:col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
