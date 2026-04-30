import React from "react";
import Banner from "../Images/Banner.jpg";

const Home = () => {
  return (
    <div className="relative bg-red-500">
      {/* Image */}
      <img className="w-340 h-160 object-cover mt-10" src={Banner} alt="" />
      {/* Overlay (optional dark effect) */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Welcome to Burgizza House 🍔
          </h1>
          <p className="mt-6 leading-6">
            Burgizza House is a casual fast-food concept that combines Burger, Pizza <br /> & Sandwich flavors into one unique item, offering tasty &
            Delicious
          </p>
          <button
            type="button"
            className="bg-rose-600 mt-4 px-6 py-2 font-medium rounded text-white cursor-pointer"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
