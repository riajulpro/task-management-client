import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/public/Home";
import Error from "../layout/Error";
import Main from "../layout/Main";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Private from "./Private";
import Dashboard from "../pages/private/Dashboard";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import NonLogged from "./NonLogged";
import DashboardHome from "../pages/private/DashboardHome";
import AddTask from "../pages/private/AddTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <NonLogged>
        <Login />
      </NonLogged>
    ),
  },
  {
    path: "/register",
    element: (
      <NonLogged>
        <Register />
      </NonLogged>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Private>
        <Dashboard />
      </Private>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "add-task",
        element: <AddTask />,
      },
    ],
  },
]);

export default router;
