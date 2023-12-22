import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/Authentication";

const DashboardMenu = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const dashboardItem = [
    {
      route: "Dashboard",
      pathname: "/dashboard",
    },
    {
      route: "Add Tasks",
      pathname: "/dashboard/add-task",
    },
    {
      route: "Home",
      pathname: "/",
    },
  ];

  return (
    <div className="bg-white shadow-lg md:h-screen">
      <div className="text-center border-b font-bold text-2xl">
        <span className="text-red-500">u</span>Task
      </div>

      <div className="border-b flex justify-center items-center py-3 flex-col gap-2">
        <img
          src={user.photoURL}
          alt=""
          className="w-24 h-24 rounded-full object-cover border-2 border-violet-600"
        />
        <p className="font-bold text-sm uppercase">{user.displayName}</p>
      </div>

      <div className="flex flex-row gap-1 md:gap-0 md:flex-col justify-center md:justify-between text-sm md:text-base">
        {dashboardItem.map((item, idx) => (
          <Link
            key={item}
            to={item.pathname}
            className={`${
              location.pathname === item.pathname && "text-violet-600 font-bold"
            } border-b ${idx === dashboardItem.length - 1 && "mt-auto"}`}
          >
            <button className="p-2">{item.route}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardMenu;
