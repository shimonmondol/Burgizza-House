import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams, useOutletContext } from "react-router";
import { auth } from "../firebase/firebase";
import toast, { Toaster } from "react-hot-toast";

const Menu = () => {
  const { handleAddToCart } = useOutletContext();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    axios
      .get("/food.json")
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleCategory = (fooditem) => {
    setSearchParams({ category: fooditem });
  };

  const filteredFoods =
    category === "All"
      ? foods
      : foods.filter((item) => item.category === category);

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <Toaster />
        <div className="flex font-medium text-lg flex-wrap pt-30 justify-center text-center gap-6">
          {["All", "Burger", "Pizza", "Sandwich", "Juice"].map((fooditem) => (
            <button
              key={fooditem}
              onClick={() => handleCategory(fooditem)}
              className={`cursor-pointer border border-gray-300 px-5 py-1 rounded-lg ${
                category === fooditem ? "bg-orange-500 text-white" : ""
              }`}
            >
              {fooditem}
            </button>
          ))}
        </div>

        <div className="text-black flex flex-wrap gap-8 justify-center mt-10 pb-20 px-2">
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
              <h1 className="font-semibold text-lg mt-2">
                Price : {item.price} TK
              </h1>
              <div className="flex justify-evenly mt-4 gap-2">
                <button
                  type="button"
                  onClick={() => navigate(`/viewdetails/${item.id}`)}
                  className="text-white bg-orange-500 hover:bg-orange-800 cursor-pointer font-medium rounded text-sm px-4 py-1.5"
                >
                  View Details
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (user) {
                      const added = handleAddToCart(item);
                      if (added) {
                        toast.success("Added to Cart");
                      } else {
                        toast.error("Already Added");
                      }
                    } else {
                      navigate("/login");
                    }
                  }}
                  className="text-white bg-orange-500 hover:bg-orange-800 cursor-pointer font-medium rounded text-sm px-4 py-1.5"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
