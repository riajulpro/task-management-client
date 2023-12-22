import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="md:w-1/4 p-5 bg-base-100 rounded-lg shadow-lg">
        <form className="w-full">
          <div className="font-semibold text-lg">Login Now</div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Username:</span>
            </div>
            <input
              type="text"
              placeholder="enter your username"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input
              type="email"
              placeholder="enter your email"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input
              type="password"
              placeholder="enter your password"
              className="input input-bordered w-full"
            />
          </label>

          <div className="form-control mt-5">
            <button className="btn btn-primary">Register</button>
          </div>
          <div className="text-center my-5">
            Already have an account?{" "}
            <Link className="text-primary" to="/login">
              Login
            </Link>
          </div>
        </form>
        <button className="bg-gray-100 rounded-full p-2 text-sm flex justify-center gap-5 items-center hover:text-[#34A853] border hover:border-[#34A853] duration-150 w-full">
          <FaGoogle /> <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
