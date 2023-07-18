import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";
import { FiSearch } from "react-icons/fi";

const Navigation = ({}) => {
  return (
    <header className="bg-transparent">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" to="/">
          <span className="sr-only">Home</span>
          <img src={logo} alt="" className="w-64 h-100" />
        </Link>

        <div className="flex flex-1 items-center justify-between">
          <nav aria-label="Global" className="hidden md:block"></nav>

          <div className="flex items-center ml-auto gap-4">
            <div className="flex items-center">
              <input
                className="border rounded-md p-2"
                type="text"
                placeholder="Search..."
              />
              <button className="p-2 text-white">
                <FiSearch />
              </button>
            </div>
            <div className="sm:flex sm:gap-4">
              <Link
                className="block rounded-md bg-transparent px-5 py-2.5 mr-2 text-sm font-medium text-white transition hover:bg-teal-700"
                to="/"
              >
                Login
              </Link>
              <Link
                className="block rounded-md bg-pink-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                to="/"
              >
                Signup
              </Link>

              <Link
                className="hidden rounded-md bg-transparent px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                to="/"
              >
                Register
              </Link>
            </div>

            <button className="block rounded bg-transparent p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
