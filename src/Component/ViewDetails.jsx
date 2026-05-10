import { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { auth } from "../firebase/firebase";
import toast, { Toaster } from "react-hot-toast";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const { handleAddToCart } = useOutletContext();
  const user = auth.currentUser;

  useEffect(() => {
    axios
      .get("/food.json")
      .then((res) => {
        const singleItem = res.data.find((food) => food.id === id);
        setItem(singleItem);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!item) {
    return (
      <div className="text-center mt-28 text-2xl font-semibold">
        Food not found...
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <div className="w-[1100px] mx-auto px-4 pt-28 pb-20">
        <Toaster />
        <h1 className="font-bold text-3xl text-center">Your Food Details</h1>
        <div className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-80 object-cover rounded-xl"
          />
          <div className="ml-6">
            <p className="text-orange-500 font-semibold text-xl mb-2">
              {item.category}
            </p>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              {item.name}
            </h1>
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Price: {item.price} TK
            </p>
            <div className="flex text-lg text-gray-700 mb-4">
              <div>
                <p>Rating:</p>
              </div>
              <div className="flex ml-2">
                <p className="mt-[6px] flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p className="mt-[1px] ml-2">{item.avgRating}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-7 mb-4">{item.description}</p>
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
              className="text-white bg-orange-500 hover:bg-orange-800 cursor-pointer font-medium rounded text-sm px-4 py-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
