import React from "react";
import Banner from "../Images/Banner.jpg";

const Home = () => {
  return (
    <div className="relative bg-red-500">
      {/* Image */}
      <img className="w-full object-cover" src={Banner} alt="" />
      {/* Overlay (optional dark effect) */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Welcome to Burgizza House 🍔
        </h1>
      </div>
    </div>
  );
};

export default Home;
