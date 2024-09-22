import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <nav className="bg-green-500 sticky top-0 z-[9998] w-full shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="Restaurant-logo.png"
                className="rounded-full w-[3rem] sm:w-[4rem] p-2"
                alt="Restaurant Logo"
              />
            </div>

            {/* Hamburger Menu (for small screens) */}
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Links (visible on larger screens) */}
            <div className="hidden lg:flex items-center space-x-6">
              {links.map((elem, index) => (
                <Link
                  key={index}
                  className="m-2 text-white font-bold hover:text-gray-300"
                  to={elem.path}
                >
                  {elem.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden transition-all bg-green-500">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {links.map((elem, index) => (
                <Link
                  key={index}
                  className="block px-3 py-2 text-white font-bold hover:bg-gray-700 rounded"
                  to={elem.path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {elem.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Navbar;
