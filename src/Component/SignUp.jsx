import React from "react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // Update displayName
      await updateProfile(userCredential.user, {
        displayName: fname,
      });

      toast.success("SignUp Successful", {
        position: "top-center",
        autoClose: 4000,
        onClose: () => navigate("/login"),
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Already have an account, Please login.", {
          position: "top-center",
        });
      } else {
        toast.error("Invalid Name or Email or Password", {
          position: "top-center",
        });
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
          <div className="text-center mb-6 text-2xl sm:text-3xl font-semibold text-white">
            Burgizza-House
          </div>

          <div className="w-full bg-white rounded-xl shadow-lg">
            <div className="p-5 sm:p-8 space-y-5">
              <h1 className="text-xl sm:text-2xl font-bold text-black">
                Create an account
              </h1>

              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    onChange={(e) => setFname(e.target.value)}
                    type="text"
                    id="name"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 p-2.5"
                    placeholder="Shimon Mondol"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    value={email}
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
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
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
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>

                <p className="text-gray-900 font-medium text-sm sm:text-base text-center">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-teal-700 hover:text-red-600"
                  >
                    Login
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

export default SignUp;
