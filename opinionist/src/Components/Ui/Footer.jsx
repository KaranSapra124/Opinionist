import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Feedback",
      path: "/feedback",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Links */}
        <div className="flex space-x-6">
          {links.map((elem, index) => (
            <Link
              key={index}
              to={elem.path}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {elem.title}
            </Link>
          ))}
        </div>
        <hr className="bg-white text-white"/>
        {/* Footer Text */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
