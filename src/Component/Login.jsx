import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import LoginImage from "../Images/Login.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserName(user ? user.displayName || "User" : "");
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("Login Successfully", {
        position: "top-center",
        autoClose: 2000,
        onClose: () => navigate("/"),
      });
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Try again.", {
          position: "top-center",
        });
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format.", {
          position: "top-center",
        });
      } else if (error.code === "auth/invalid-credential") {
        toast.error("Invalid email or password.", {
          position: "top-center",
        });
      } else {
        toast.error("Login failed. Try again.", {
          position: "top-center",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <section
        className="relative min-h-screen flex items-center justify-center px-4 py-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${LoginImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Login Content */}
        <div className="relative z-10 w-full max-w-md">
          <Link
            to="/"
            className="block text-center mb-6 text-2xl sm:text-3xl font-bold text-white"
          >
            Burgizza-House
          </Link>

          <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl">
            <div className="p-5 sm:p-8 space-y-5">
              <h1 className="text-xl sm:text-2xl font-bold text-black text-center">
                Sign in to your account
              </h1>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 p-2.5"
                    placeholder="Name@gmail.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 p-2.5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white bg-black hover:bg-gray-800 cursor-pointer font-medium rounded-lg text-sm px-5 py-3 text-center disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-sm sm:text-base font-medium text-gray-900 text-center">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold text-teal-700 hover:text-red-600"
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;