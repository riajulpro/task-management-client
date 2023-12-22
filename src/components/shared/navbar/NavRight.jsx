import { useContext } from "react";
import { AuthContext } from "../../../context/Authentication";
import { Link } from "react-router-dom";

const NavRight = () => {
  const { user, logOut } = useContext(AuthContext);

  const logoutNow = () => {
    logOut()
      .then(() => console.log("Logout successfully done!"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex gap-3 items-center">
      {user ? (
        <button
          className="px-3 py-1 rounded-md bg-red-600 text-white"
          onClick={logoutNow}
        >
          Log out
        </button>
      ) : (
        <Link to="/login">
          <button className="px-3 py-1 rounded-md bg-green-600 text-white">
            Login
          </button>
        </Link>
      )}
      <img
        src={
          user
            ? user.photoURL
            : "https://th.bing.com/th/id/OIP.StBOWlrvi-z4oqJ2pkze0AHaLc?rs=1&pid=ImgDetMain"
        }
        alt="User Profile Picture"
        className="w-8 h-8 rounded-full object-cover object-top border-2 border-red-500"
      />
    </div>
  );
};

export default NavRight;
