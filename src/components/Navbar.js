import React from "react";
import { Link } from "react-router-dom";
import Rocket from "./../assets/rocket-512.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap  p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src={Rocket}
          alt=""
          className="object-left-top object-contain w-12"
        />
        <span className="font-semibold text-2xl tracking-tight ml-4">
          <Link to="/">SpaceX</Link>
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow  lg:flex lg:items-center lg:w-auto lg:text-right">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="text-xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-10"
          >
            Rockets
          </Link>
          <Link
            to="/usersPage"
            className="text-xl  block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
}
