
import React, { useState } from "react";
import { Search } from "lucide-react";

const menuData = {
  Snacks: [
    {
      id: 1,
      name: "French Fries",
      price: 50,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
    },
    {
      id: 2,
      name: "Burger",
      price: 80,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    },
    {
      id: 3,
      name: "Sandwich",
      price: 60,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500",
    },
    {
      id: 4,
      name: "Pizza",
      price: 120,
      type: "Veg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPXxPwfxiwWMk5odEAa5p8FfJ4DDFBCMIR9r1O5K8pw&s",
    },
  ],

  Meals: [
    {
      id: 5,
      name: "Veg Thali",
      price: 60,
      type: "Veg",
      image:
        "https://www.imagesarovar.in/wp-content/uploads/edd/2025/01/indian-veg-food-thali-png-vector-illustration-pre-rgnh63652.jpg",
    },
    {
      id: 6,
      name: "Biryani",
      price: 100,
      type: "Non-Veg",
      image:
        "https://i.pinimg.com/474x/67/e7/ff/67e7ff9859d6c9df0c30b897bf901e1d.jpg",
    },
    {
      id: 7,
      name: "Fried Rice",
      price: 80,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
    },
    {
      id: 8,
      name: "Paneer Curry",
      price: 110,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
    },
  ],

  Beverages: [
    {
      id: 9,
      name: "Cold Coffee",
      price: 50,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
    },
    {
      id: 10,
      name: "Milkshake",
      price: 70,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
    },
    {
      id: 11,
      name: "Lemon Soda",
      price: 30,
      type: "Veg",
      image:
        "https://png.pngtree.com/png-clipart/20240115/original/pngtree-watercolor-lemon-soda-drink-free-element-png-image_14116814.png",
    },
    {
      id: 12,
      name: "Fresh Juice",
      price: 40,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500",
    },
  ],

  Desserts: [
    {
      id: 13,
      name: "Ice Cream",
      price: 40,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
    },
    {
      id: 14,
      name: "Brownie",
      price: 60,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
    },
    {
      id: 15,
      name: "Chocolate Cake",
      price: 70,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
    },
    {
      id: 16,
      name: "Donut",
      price: 40,
      type: "Veg",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500",
    },
  ],
};

const card_body = () => {
  const [activeCategory, setActiveCategory] = useState("Snacks");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDishes = menuData[activeCategory].filter((dish) =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const specials = menuData.Meals.slice(0, 3);

  return (
    <div className="bg-[#1A1A19] w-full min-h-screen flex flex-col gap-5 py-10">

      {/* Today's Specials */}
      <div className="main">
        <h1 className="text-2xl font-semibold text-white pl-6 md:pl-21">
          Today's specials
        </h1>
      </div>

      <div className="cards flex flex-row flex-wrap items-center justify-center gap-6 px-6 md:px-10">

        {specials.map((dish) => (
          <div
            key={dish.id}
            className="w-full sm:w-[45%] lg:w-[30%] min-h-[350px] border border-dashed border-[#6a4c2b] rounded-2xl text-[#f5d6a0] flex flex-col items-center justify-center gap-5 py-5"
          >
            <img
              className="rounded-xl w-[85%] h-[180px] object-cover"
              src={dish.image}
              alt={dish.name}
            />

            <div className="w-[85%] flex flex-col items-start justify-start gap-2 pt-2">
              <h2 className="text-xl text-white font-medium">
                {dish.name}
              </h2>

              <div className="flex flex-row items-center justify-start gap-5">
                <h3 className="text-xl text-[#ffcb3d] font-bold">
                  Rs {dish.price}
                </h3>

                <span className="bg-[#E4F5E4] text-[#0DA30C] text-sm border border-[#0DA30C] py-0.5 px-2 rounded-xl">
                  {dish.type}
                </span>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Full Menu */}
      <div className="menu text-white mt-5 px-6 md:px-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-semibold">
            Full menu
          </h1>

          {/* Search Bar */}
          <div className="flex items-center gap-2 border border-[#363636] rounded-xl px-3 py-2 w-full md:w-fit">
            <Search size={18} className="text-gray-400 shrink-0" />

            <input
              type="text"
              placeholder="Search dishes"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-sm text-white outline-none placeholder:text-gray-400 w-full md:w-36"
            />
          </div>
        </div>

        {/* Category Buttons */}
        <div className="btn flex flex-row flex-wrap items-center justify-start gap-3 mt-5">

          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-xl border transition-all duration-300 hover:cursor-pointer ${
                activeCategory === category
                  ? "bg-white text-[#1A1A19] border-white"
                  : "bg-transparent text-white border-[#444444] hover:bg-white hover:text-[#6a4c2b]"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Active Category Heading */}
        <h2 className="text-xl font-semibold mt-7 mb-5">
          {activeCategory}
        </h2>

        {/* Dishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="border border-dashed border-[#6a4c2b] rounded-2xl p-4 hover:border-[#ffcb3d] transition-all duration-300"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-[180px] object-cover rounded-xl"
                />

                <div className="flex flex-col gap-3 mt-4">

                  <h3 className="text-lg text-white font-medium">
                    {dish.name}
                  </h3>

                  <div className="flex items-center gap-4">
                    <span className="text-xl text-[#ffcb3d] font-bold">
                      Rs {dish.price}
                    </span>

                    <span className="bg-[#E4F5E4] text-[#0DA30C] text-sm border border-[#0DA30C] px-2 py-0.5 rounded-xl">
                      {dish.type}
                    </span>
                  </div>

                  <button
                    onClick={() => alert(`${dish.name} selected!`)}
                    className="w-full bg-white text-black py-2 rounded-xl font-medium hover:bg-[#ffcb3d] transition-colors duration-300"
                  >
                    Add
                  </button>

                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-400 py-5">
              No dishes found in {activeCategory}.
            </p>
          )}

        </div>

      </div>

    </div>
  );
};

export default card_body;
