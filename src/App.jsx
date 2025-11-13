import React from "react";

const App = () => {
  return (
    <div className="py-8 lg:w-[980px] mx-auto px-4 lg:px-0">
      {/* Responsive Card Grid */}
      <input type="text" />
      <div className="flex flex-wrap gap-10">
        {/* Card 1 */}
        <div className="p-4 bg-gray-700 rounded-lg shadow text-sm w-full sm:w-[300px]">
          <img
            className="rounded-md max-h-40 w-full object-cover"
            src="../src/Images/Burger.jpg"
            alt="Burger"
          />
          <h1 className="text-white text-xl font-semibold mt-2">Burger King</h1>
          <p className="text-white mt-3 text-justify">
            A burger is a popular fast food made with a cooked patty usually
            chicken, or plant based placed inside a sliced bun.
          </p>
          <button
            type="button"
            className="bg-indigo-600 mt-4 px-6 py-2 font-medium rounded text-white cursor-pointer"
          >
            Order Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="p-4 bg-gray-700 rounded-lg shadow text-sm w-full sm:w-[300px]">
          <img
            className="rounded-md max-h-40 w-full object-cover"
            src="../src/Images/Pizza.jpg"
            alt="Office"
          />
          <h1 className="text-white text-xl font-semibold mt-2">Pizza Burg</h1>
          <p className="text-white mt-3 text-justify">
            Freshly baked, golden-crusted pizza topped with rich tomato sauce,
            gooey mozzarella cheese.
          </p>
          <button
            type="button"
            className="bg-indigo-600 mt-4 px-6 py-2 font-medium rounded text-white cursor-pointer"
          >
            Order Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="p-4 bg-gray-700 rounded-lg shadow text-sm w-full sm:w-[300px]">
          <img
            className="rounded-md max-h-40 w-full object-cover"
            src="/src/Images/Sandwich.jpg"
            alt="Office"
          />
          <h1 className="text-white text-xl font-semibold mt-2">
            Sandwich
          </h1>
          <p className="text-white mt-3 text-justify">
            A deliciously fresh sandwich layered with soft bread, crisp
            vegetables, creamy sauces, and your choice of flavorful fillings.
          </p>
          <button
            type="button"
            className="bg-indigo-600 mt-4 px-6 py-2 font-medium rounded text-white cursor-pointer"
          >
            Order Now
          </button>
        </div>
        <p className="text-justify text-xl lg:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus aut et labore. Corporis assumenda autem beatae amet
          asperiores, facilis necessitatibus perferendis magnam dolor ducimus
          consectetur architecto consequatur aut cum recusandae! Explicabo, cum
          voluptate praesentium et ipsa nisi ut totam eveniet? Iste temporibus
          distinctio deserunt porro corporis vitae laborum quod exercitationem!
        </p>
      </div>

      {/* Responsive Description Text */}
    </div>
  );
};

export default App;
