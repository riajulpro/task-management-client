import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/Authentication";
import { useContext, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigateTo = useNavigate();
  const location = useLocation();

  const googleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log("Successfully Logged in", res.user);
        navigateTo(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const { register, handleSubmit } = useForm();

  const login = (data) => {
    signIn(data.email, data.password)
      .then(() => {
        Swal.fire(
          "You have successfully login!",
          "Now you can access all features.",
          "success"
        );
        navigateTo(location.state ? location.state : "/");
      })
      .catch(() => {
        setLoginError("Invalid email or password");
      });
  };

  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="w-11/12 md:w-1/4 p-5 bg-base-100 rounded-lg shadow-lg">
        {loginError && <div>{loginError}</div>}
        <form className="w-full" onSubmit={handleSubmit(login)}>
          <div className="font-semibold text-lg">Login Now</div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input
              name="email"
              {...register("email")}
              placeholder="enter your email"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Password:</span>
            </div>
            <input
              name="password"
              {...register("password")}
              placeholder="enter your password"
              className="input input-bordered w-full"
            />
          </label>

          <div className="form-control mt-5">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="text-center my-5">
            Don&apos;t have an account?{" "}
            <Link className="text-primary" to="/register">
              Register
            </Link>
          </div>
        </form>
        <button
          onClick={googleLogin}
          className="bg-gray-100 rounded-full p-2 text-sm flex justify-center gap-5 items-center hover:text-[#34A853] border hover:border-[#34A853] duration-150 w-full"
        >
          <FaGoogle /> <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
