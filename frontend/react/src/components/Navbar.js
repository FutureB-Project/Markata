import React from "react";
import {
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
} from "react-icons/io5";
import logo from "../components/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-[1440px]">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-14 mr-4 cursor-pointer" />
          </Link>
          <ul className="flex space-x-4 ml-4">
            <Link to="/">
              <li>
                <a className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                  Contact
                </a>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <a className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                  About
                </a>
              </li>
            </Link>
            <Link to="/signup">
              <li>
                <a className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">
                  Sign Up
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="What are you lookin for?"
            className="border border-gray-400 p-2 rounded-md"
          />

          <IoHeartOutline className="text-black text-3xl relative rounded-full hover:bg-gray-800 p-1 text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
          <IoCartOutline className="text-black text-3xl relative rounded-full hover:bg-gray-800 p-1 text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
          <IoPersonOutline className="text-black text-3xl relative rounded-full hover:bg-gray-800 p-1 text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
