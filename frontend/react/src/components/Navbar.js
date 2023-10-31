import React from "react";
import {
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import logo from "./logo.png";
function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <img
            href="/"
            src={logo}
            alt="logo"
            className="w-8 mr-4 cursor-pointer "
          />
          <ul className="flex space-x-4 ml-4">
            <li>
              <a
                href="#"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="What are you lookin for?"
            className="border border-gray-300 p-2 rounded-md"
          />

          <IoHeartOutline className="text-black text-2xl relative rounded-full hover:bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
          <IoCartOutline className="text-black text-2xl relative rounded-full hover:bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
          <IoPersonOutline className="text-black text-2xl relative rounded-full hover:bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
