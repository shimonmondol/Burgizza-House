import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import logo from "../Images/Logo.jpg";

const Navbar = () => {
  const [userName, setUserName] = useState("");
  const [menuopen, setMenuopen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || "User");
      } else {
        setUserName("");
      }
    });
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      toast.error("Logout failed.", { position: "top-center" });
    }
  };

  return (
    <div>
      <nav className="fixed bg-amber-100 w-full top-0">
        <div className="lg:w-[1060px] flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center text-white text-xl font-semibold">
            <img className="w-5 h-5 rounded-xs" src={logo} alt="" />
            <h1 className="ml-2 text-black">Burgizza House</h1>
          </Link>
          <div className="grid grid-flow-col gap-8 font-semibold text-black">
            <Link className="hover:text-rose-500" to="/">
              Home
            </Link>
            <Link className="hover:text-rose-500" to="/about">
              About
            </Link>
            <Link className="hover:text-rose-500" to="/product ">
              Product
            </Link>
            <Link className="hover:text-rose-500" to="/contact">
              Contact
            </Link>
          </div>
          <div className="md:order-2 relative">
            {userName ? (
              <div
                className="text-white bg-blue-500 font-medium rounded-sm text-sm px-3 py-2 cursor-pointer"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {userName}
                {menuopen && (
                  <div className="absolute ml-[14px] mt-2 bg-white text-black rounded">
                    <button
                      onClick={handleLogout}
                      className="w-full text-center px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="text-white bg-blue-500 hover:bg-red-500 flex font-medium rounded-sm text-sm px-3 py-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
