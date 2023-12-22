import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center flex flex-col gap-5">
        <h1 className="font-bold text-xl md:text-3xl">404 - Page not found!</h1>
        <p className="text-slate-600">You are in a wrong path.</p>
        <Link to={"/"}>
          <button className="btn btn-primary px-5">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
