import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div>
        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="font-semibold text-lg">Register Now</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="username"
                placeholder="username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="text-center">
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </div>
            <button className="bg-gray-100 rounded-full p-2 text-sm flex justify-center gap-5 m-5 items-center hover:text-[#34A853] border hover:border-[#34A853] duration-150">
              <FaGoogle /> <span>Login with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
