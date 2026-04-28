import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router"; // ✅ use react-router-dom
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Track logged-in user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || "User");
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      toast.success("Login Successfully", {
        position: "top-center",
        autoClose: 3000,
        onClose: () => navigate("/"),
      });
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("Login failed. Try again.", { position: "top-center" });
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Try again.", {
          position: "top-center",
        });
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format.", { position: "top-center" });
      } else {
        toast.error("Login failed. Try again.", { position: "top-center" });
      }
    } finally {
      setLoading(false); // ✅ Always stop loading
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="min-h-screen bg-teal-900 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="block text-center mb-6 text-2xl sm:text-3xl font-semibold text-white"
          >
            Burgizza-House
          </Link>

          <div className="w-full bg-white rounded-xl shadow-lg">
            <div className="p-5 sm:p-8 space-y-5">
              <h1 className="text-xl sm:text-2xl font-bold text-black">
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
                  className="w-full text-white bg-black hover:bg-gray-800 cursor-pointer font-medium rounded-lg text-sm px-5 py-3 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-sm sm:text-base font-medium text-gray-900 text-center">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-teal-700 hover:text-red-600"
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
