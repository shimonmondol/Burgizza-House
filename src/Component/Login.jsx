import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router"; // ✅ use react-router-dom
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
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

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
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
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="bg-sky-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-black"
          >
            Burgizza-House
          </Link>

          <div className="w-full lg:w-1/4 bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                  Sign in to your account
                </h1>

                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none w-full p-2.5"
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
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none w-full p-2.5"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Login
                  </button>

                  <p className="text-sm font-medium text-gray-900">
                    Don’t have an account yet?{" "}
                    <Link to="/signup" className="font-medium text-primary-500">
                      Sign Up
                    </Link>
                  </p>
                </form>
              </>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
