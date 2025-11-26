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
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
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
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="bg-sky-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-black">
            Burgizza-House
          </div>
          <div className="w-full lg:w-1/4 sm:max-w-md bg-white rounded-lg md:mt-0 xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                Create an account
              </h1>
              <form
                onSubmit={handleSignup}
                className="space-y-4 md:space-y-6"
                action="#"
              >
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
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none w-full p-2.5 "
                    placeholder="Shimon Mondol"
                    required=""
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
                    name="email"
                    id="email"
                    value={email}
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none w-full p-2.5 "
                    placeholder="Name@gmail.com"
                    required=""
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
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none w-full p-2.5 "
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer text-white bg-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-gray-900 font-medium">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium text-primary-500">
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
