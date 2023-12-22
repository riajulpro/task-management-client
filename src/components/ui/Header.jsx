import { NavLink } from "react-router-dom";
import NavRight from "../shared/navbar/NavRight";
import Navbar from "../shared/navbar/Navbar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuItem, setMenuItem] = useState(false);

  return (
    <div className="bg-gray-200 relative">
      <div className="w-11/12 md:w-9/12 mx-auto p-3 md:p-5 flex flex-row justify-between items-center gap-2 md:gap-0">
        <div className="flex gap-2 items-center text-lg md:text-2xl font-bold text-slate-900">
          <button onClick={() => setMenuItem(!menuItem)}>
            <FaBars className="block md:hidden" />
          </button>
          <div>
            <span className="text-red-500">u</span>Task
          </div>
        </div>
        <Navbar />
        <NavRight />
      </div>
      <div className="absolute">
        <nav
          className={`bg-white shadow-md p-3 flex-col gap-3 justify-center ${
            menuItem ? "flex" : "hidden"
          }`}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
