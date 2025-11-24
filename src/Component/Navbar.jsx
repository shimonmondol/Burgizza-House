import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-green-700 fixed w-full top-0">
        <div className="lg:w-[980px] flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center text-white text-xl font-semibold">
            Burgizza House
          </div>
          <div className="grid grid-flow-col gap-8 font-semibold text-white ">
            <Link className="hover:text-rose-500" to="/">Home</Link>
            <Link className="hover:text-rose-500" to="/about">About</Link>
            <Link className="hover:text-rose-500" to="/contact">Contact</Link>
            <Link className="hover:text-rose-500" to="/footer">Footer</Link>
          </div>
          <Link
            to="/login"
            className="text-white bg-blue-500 hover:bg-red-500 flex md:order-2 space-x-3 font-medium rounded-sm text-sm px-3 py-2"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
