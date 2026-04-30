import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    axios
      .get("/food.json")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredFoods =
    category === "All"
      ? foods
      : foods.filter((item) => item.category === category);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex font-medium text-lg flex-wrap mt-30 justify-center text-center gap-6">
        <button
          onClick={() => setCategory("All")}
          className={`cursor-pointer border border-gray-300 w-20 py-1 rounded-lg ${
            category === "All" ? "bg-orange-500 text-white" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setCategory("Burger")}
          className={`cursor-pointer border border-gray-300 w-24 py-1 rounded-lg ${
            category === "Burger" ? "bg-orange-500 text-white" : ""
          }`}
        >
          Burger
        </button>
        <button
          onClick={() => setCategory("Pizza")}
          className={`cursor-pointer border border-gray-300 w-20 py-1 rounded-lg ${
            category === "Pizza" ? "bg-orange-500 text-white" : ""
          }`}
        >
          Pizza
        </button>
        <button
          onClick={() => setCategory("Sandwich")}
          className={`cursor-pointer border border-gray-300 w-28 py-1 rounded-lg ${
            category === "Sandwich" ? "bg-orange-500 text-white" : ""
          }`}
        >
          Sandwich
        </button>
        <button
          onClick={() => setCategory("Juice")}
          className={`cursor-pointer border border-gray-300 w-20 py-1 rounded-lg ${
            category === "Juice" ? "bg-orange-500 text-white" : ""
          }`}
        >
          Juice
        </button>
      </div>
      <div className="text-black flex flex-wrap gap-8 justify-center text-center mt-10 mb-20 px-2">
        {filteredFoods.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-80"
          >
            <img
              className="rounded-md h-40 w-100 object-cover"
              src={item.image}
              alt={item.name}
            />

            <h1 className="text-gray-900 text-2xl font-semibold mt-4">
              {item.name}
            </h1>

            <p className="text-zinc-800 text-sm/6 mt-2 mb-2">
              {item.description}
            </p>

            <h1 className="font-semibold text-xl">Price : {item.price} TK</h1>

            <div className="flex justify-evenly mt-3 gap-2">
              <button
                type="button"
                className="text-white bg-orange-500 hover:bg-green-500 cursor-pointer font-medium rounded text-sm px-4 py-1.5"
              >
                Order Now
              </button>

              <button
                type="button"
                className="text-white bg-orange-500 hover:bg-green-500 cursor-pointer font-medium rounded text-sm px-4 py-1.5"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
