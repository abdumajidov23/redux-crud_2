import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="w-full fixed shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold tracking-wide">
          <NavLink to="/" className="hover:text-indigo-400">
            MyApp
          </NavLink>
        </h1>
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-lg font-medium after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full ${
                isActive
                  ? "text-indigo-400 after:bg-indigo-400"
                  : "after:bg-transparent hover:text-gray-300 hover:after:bg-gray-300"
              } transition-all after:transition-all`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `relative text-lg font-medium after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full ${
                isActive
                  ? "text-indigo-400 after:bg-indigo-400"
                  : "after:bg-transparent hover:text-gray-300 hover:after:bg-gray-300"
              } transition-all after:transition-all`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/createuser"
            className={({ isActive }) =>
              `relative text-lg font-medium after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full ${
                isActive
                  ? "text-indigo-400 after:bg-indigo-400"
                  : "after:bg-transparent hover:text-gray-300 hover:after:bg-gray-300"
              } transition-all after:transition-all`
            }
          >
            Create User
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
