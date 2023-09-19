import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import Logo from "../assets/logo.png";

export const GalleryHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const activeCLass =
    "block py-2 pr-4 pl-3 text-blue-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

  const inActiveClass =
    "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center lg:order-2">
            {/* //LINK -  Darkmode button */}
            <button
              // onClick={() => setDarkMode(!darkMode)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex  items-center p-2 ml-1 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              // aria-controls="mobile-menu-2"
              // aria-expanded={mobileMenuOpen ? "true" : "false"}
              // onClick={toggleMobileMenu}
            >
              {/* {darkMode ? <FiMoon /> : <FiSun />} */}
            </button>

            {/* Mobile Menu Button */}
          </div>

          <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  end
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeCLass : inActiveClass
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/popular"
                  className={({ isActive }) =>
                    isActive ? activeCLass : inActiveClass
                  }
                >
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/top"
                  className={({ isActive }) =>
                    isActive ? activeCLass : inActiveClass
                  }
                >
                  Top Rated
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies/upcoming"
                  className={({ isActive }) =>
                    isActive ? activeCLass : inActiveClass
                  }
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
