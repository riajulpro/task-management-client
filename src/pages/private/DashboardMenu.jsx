import { Link, useLocation } from "react-router-dom";

const DashboardMenu = () => {
  const location = useLocation();

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
      route: "All Tasks",
      pathname: "/dashboard/all-tasks",
    },
    {
      route: "Home",
      pathname: "/",
    },
  ];

  return (
    <div className="bg-white shadow-lg h-screen">
      <div className="text-center p-5 border-b">
        <span className="text-red-500">u</span>Task
      </div>

      <div className="flex flex-col justify-between">
        {dashboardItem.map((item, idx) => (
          <Link
            key={item}
            to={item.pathname}
            className={`${
              location.pathname === item.pathname && "text-violet-600 font-bold"
            } border-b ${idx === dashboardItem.length - 1 && "mt-10"}`}
          >
            <button className="p-2">{item.route}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardMenu;
