import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = () => {
  let [allproduct, setAllproduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllproduct(data.data.products);
    }
    getProduct();
  }, []);

  return (
    <div className="flex flex-wrap justify-around mt-20">
      {allproduct.map((item) => (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
            <img
              src={item.thumbnail}
              alt="card-image"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-slate-800 text-xl font-semibold">
                {item.title}
              </p>
              <p className="text-cyan-600 text-xl font-semibold">${item.price}</p>
            </div>
            <p className="text-slate-600 leading-normal font-light">
             {item.description}
            </p>
            <button
              className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
