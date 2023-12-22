import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="w-11/12 md:w-9/12 p-10 mx-auto flex flex-col justify-between items-center gap-5">
        <div className="font-bold md:text-2xl">
          <span className="text-red-500">u</span>Task
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <p className="text-sm text-center p-5">
          &copy; {new Date().getFullYear()} uTask.com. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
