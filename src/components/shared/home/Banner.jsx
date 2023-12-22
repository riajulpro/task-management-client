import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="bg-blue-500 p-8 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Task Management Website
        </h1>
        <p className="text-lg mb-6">
          Stay organized and manage your tasks efficiently.
        </p>
        <Link to="/dashboard">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Let&apos;s Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
