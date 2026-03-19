import Burger from "../Images/Burger.jpg";
import Pizza from "../Images/Pizza.jpg";
import Sandwich from "../Images/Sandwich.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <div className="w-[1000px] mx-auto lg:px-0">
          {/* Responsive Card Grid */}
          <div className="flex flex-wrap gap-10 mt-10">
            {/* Card 1 */}
            <div className="p-4 bg-[#ffffff] text-black rounded-lg shadow text-sm w-full sm:w-[300px]">
              <img
                className="rounded-md max-h-40 w-full object-cover"
                src={Burger}
                alt="Burger"
              />
              <h1 className="text-black text-xl font-semibold mt-2">
                Burger King
              </h1>
              <p className="text-black mt-3 text-justify">
                A burger is a popular fast food made with a cooked patty usually
                chicken, or plant based placed inside a sliced bun.
              </p>
              <h1 className="text-black text-xl font-medium mt-2">
                Price : 100$
              </h1>
              <button
                type="button"
                className="bg-gray-700 hover:bg-red-600 mt-4 px-6 py-2 font-medium rounded text-white cursor-pointer"
              >
                Order Now
              </button>
            </div>
            {/* Card 2 */}
            <div className="p-4 bg-[#ffffff] text-black rounded-lg shadow text-sm w-full sm:w-[300px]">
              <img
                className="rounded-md max-h-40 w-full object-cover"
                src={Pizza}
                alt="Pizza"
              />
              <h1 className="text-xl font-semibold mt-2">Pizza Burg</h1>
              <p className="mt-3 text-justify">
                Freshly baked, golden-crusted pizza topped with rich tomato
                sauce, gooey mozzarella cheese.
              </p>
              <h1 className="text-xl font-medium mt-2">Price : 125$</h1>
              <button
                type="button"
                className="bg-gray-700 hover:bg-red-600 mt-4 px-6 py-2 font-medium rounded text-white cursor-pointer"
              >
                Order Now
              </button>
            </div>

            {/* Card 3 */}
            <div className="p-4 bg-[#ffffff] text-black rounded-lg shadow text-sm w-full sm:w-[300px]">
              <img
                className="rounded-md max-h-40 w-full object-cover"
                src={Sandwich}
                alt="Sandwich"
              />
              <h1 className="text-xl font-semibold mt-2">Sandwich</h1>
              <p className="mt-3 text-justify">
                A deliciously fresh sandwich layered with soft bread, crisp
                vegetables, creamy sauces, and your choice of flavorful
                fillings.
              </p>
              <h1 className="text-xl font-medium mt-2">Price : 150$</h1>
              <button
                type="button"
                className="bg-gray-700 hover:bg-red-600 mt-4 px-6 py-2 font-medium rounded text-white cursor-pointer"
              >
                Order Now
              </button>
            </div>
            <p className="text-justify text-xl lg:text-base">
              Burgizza House is a modern fast-food restaurant offering a
              delicious fusion of Burgers, Pizzas, Sandwiches, and a variety of
              quick-serve meals. Known for its fresh ingredients and bold
              flavors, Burgizza House focuses on delivering high-quality food at
              an affordable price. With a cozy dining environment, friendly
              service, and fast preparation times, it has become a popular
              choice for students, families, and food lovers looking for
              convenient, tasty meals. Burgizza House aims to provide a
              satisfying experience through great taste, clean ambiance, and
              consistent customer care.
            </p>
          </div>
          {/* Responsive Description Text */}
        </div>
      </div>
    </div>
  );
};

export default Home;
