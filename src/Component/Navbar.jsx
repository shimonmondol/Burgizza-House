import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import logo from "../Images/Logo.jpg";

const Navbar = () => {
  const [userName, setUserName] = useState("");
  const [menuopen, setMenuopen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserName(user ? user.displayName || "User" : "");
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMenuopen(false);
      setMobileMenu(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-gray-800">
      <nav>
        <div className="mx-auto flex items-center justify-between p-4 lg:w-[1060px]">
          <Link
            to="/"
            className="flex items-center text-xl font-semibold text-white"
          >
            <img className="h-5 w-5 mt-1 rounded-sm" src={logo} alt="Logo" />
            <h1 className="ml-2 text-white text-2xl">Burgizza House</h1>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden grid-flow-col gap-8 font-semibold text-white md:grid">
            <Link className="hover:text-rose-500" to="/">
              Home
            </Link>
            <Link className="hover:text-rose-500" to="/about">
              About
            </Link>
            <Link className="hover:text-rose-500" to="/product">
              Product
            </Link>
            <Link className="hover:text-rose-500" to="/contact">
              Contact
            </Link>
          </div>

          {/* Desktop Login */}
          <div className="relative hidden md:block mr-12">
            {userName ? (
              <div
                className="cursor-pointer rounded-sm bg-blue-500 px-3 py-2 text-sm font-medium text-white"
                onMouseEnter={() => setMenuopen(true)}
                onMouseLeave={() => setMenuopen(false)}
              >
                {userName}

                {menuopen && (
                  <div className="absolute right-0 mt-2 rounded bg-white text-black shadow">
                    <button
                      onClick={handleLogout}
                      className="w-full cursor-pointer rounded bg-red-600 px-4 py-2 text-center text-white"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="flex rounded-sm bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-500"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-2xl font-bold text-white md:hidden cursor-pointer"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="space-y-3 bg-gray-500 px-6 pb-4 font-semibold text-black md:hidden">
            <Link
              onClick={() => setMobileMenu(false)}
              className="block hover:text-rose-500"
              to="/"
            >
              Home
            </Link>

            <Link
              onClick={() => setMobileMenu(false)}
              className="block hover:text-rose-500"
              to="/about"
            >
              About
            </Link>

            <Link
              onClick={() => setMobileMenu(false)}
              className="block hover:text-rose-500"
              to="/product"
            >
              Product
            </Link>

            <Link
              onClick={() => setMobileMenu(false)}
              className="block hover:text-rose-500"
              to="/contact"
            >
              Contact
            </Link>

            {userName ? (
              <button
                onClick={handleLogout}
                className="rounded bg-red-600 px-4 py-2 text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                onClick={() => setMobileMenu(false)}
                to="/login"
                className="inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-red-500"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
