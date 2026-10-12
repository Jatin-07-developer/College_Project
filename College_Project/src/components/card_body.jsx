
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
    {
      id: 5,
      name: "Nachos",
      price: 70,
      image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      name: "Onion Pakoda",
      price: 55,
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Onion_Pakoda.jpg"
    },
    {
      id: 7,
      name: "Khaman Dhokla",
      price: 50,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      name: "Bhel Puri",
      price: 20,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
    },
    {
    id: 9,
    name: "Samosa",
    price: 15,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Aloo Tikki",
    price: 30,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Pani Puri",
    price: 25,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Dahi Puri",
    price: 40,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Bhel Puri",
    price: 20,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Pav Bhaji",
    price: 60,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    name: "Vada Pav",
    price: 25,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "Bread Pakora",
    price: 20,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    name: "Paneer Pakora",
    price: 50,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "Veg Spring Roll",
    price: 45,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    name: "French Fries",
    price: 50,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    name: "Masala Maggi",
    price: 40,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  }
  ],

  Meals: [
  {
    id: 21,
    name: "Veg Thali",
    price: 60,
    type: "Veg",
    image: "https://www.imagesarovar.in/wp-content/uploads/edd/2025/01/indian-veg-food-thali-png-vector-illustration-pre-rgnh63652.jpg",
  },
  {
    id: 22,
    name: "Biryani",
    price: 100,
    type: "Non-Veg",
    image: "https://i.pinimg.com/474x/67/e7/ff/67e7ff9859d6c9df0c30b897bf901e1d.jpg",
  },
  {
    id: 23,
    name: "Fried Rice",
    price: 80,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
  },
  {
    id: 24,
    name: "Paneer Curry",
    price: 110,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
  },
  {
    id: 25,
    name: "Chole Bhature",
    price: 90,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500",
  },
  {
    id: 26,
    name: "Masala Dosa",
    price: 70,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
  },
  {
    id: 27,
    name: "Butter Chicken",
    price: 160,
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
  },
  {
    id: 28,
    name: "Dal Makhani",
    price: 100,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
  },
  {
    id: 29,
    name: "Rajma Chawal",
    price: 80,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
  },
  {
    id: 30,
    name: "Aloo Paratha",
    price: 50,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1626074353765-732f4dfd7c1f?w=500",
  },
  {
    id: 31,
    name: "Chicken Curry",
    price: 140,
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
  },
  {
    id: 32,
    name: "Palak Paneer",
    price: 110,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
  },
  {
    id: 33,
    name: "Pav Bhaji",
    price: 70,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500",
  },
  {
    id: 34,
    name: "Veg Pulao",
    price: 75,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
  },
  {
    id: 35,
    name: "Chilli Paneer",
    price: 120,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500",
  },
  {
    id: 36,
    name: "Tandoori Chicken",
    price: 180,
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500",
  },
  {
    id: 37,
    name: "Egg Curry",
    price: 90,
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
  },
  {
    id: 38,
    name: "Kadai Paneer",
    price: 120,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
  },
  {
    id: 39,
    name: "Chicken Fried Rice",
    price: 120,
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
  },
  {
    id: 40,
    name: "Naan with Curry",
    price: 100,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
  },
],

  Beverages: [
  {
    id: 41,
    name: "Cold Coffee",
    price: 50,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
  },
  {
    id: 42,
    name: "Milkshake",
    price: 70,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
  },
  {
    id: 43,
    name: "Lemon Soda",
    price: 30,
    type: "Veg",
    image: "https://png.pngtree.com/png-clipart/20240115/original/pngtree-watercolor-lemon-soda-drink-free-element-png-image_14116814.png",
  },
  {
    id: 44,
    name: "Fresh Juice",
    price: 40,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500",
  },
  {
    id: 45,
    name: "Mango Shake",
    price: 60,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500",
  },
  {
    id: 46,
    name: "Oreo Shake",
    price: 80,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
  },
  {
    id: 47,
    name: "Strawberry Shake",
    price: 70,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=500",
  },
  {
    id: 48,
    name: "Chocolate Shake",
    price: 80,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500",
  },
  {
    id: 49,
    name: "Orange Juice",
    price: 40,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500",
  },
  {
    id: 50,
    name: "Watermelon Juice",
    price: 45,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=500",
  },
  {
    id: 51,
    name: "Iced Tea",
    price: 35,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
  },
  {
    id: 52,
    name: "Masala Chai",
    price: 20,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=500",
  },
  {
    id: 53,
    name: "Hot Coffee",
    price: 30,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
  },
  {
    id: 54,
    name: "Cappuccino",
    price: 60,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500",
  },
  {
    id: 55,
    name: "Hot Chocolate",
    price: 70,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1542990253-0b8be8e1f6b0?w=500",
  },
  {
    id: 56,
    name: "Virgin Mojito",
    price: 60,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?w=500",
  },
  {
    id: 57,
    name: "Pineapple Juice",
    price: 45,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=500",
  },
  {
    id: 58,
    name: "Banana Shake",
    price: 50,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
  },
  {
    id: 59,
    name: "Coconut Water",
    price: 35,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500",
  },
  {
    id: 60,
    name: "Blue Lagoon Mocktail",
    price: 70,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?w=500",
  },
],

  Desserts: [
  {
    id: 61,
    name: "Ice Cream",
    price: 40,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
  },
  {
    id: 62,
    name: "Brownie",
    price: 60,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
  },
  {
    id: 63,
    name: "Chocolate Cake",
    price: 70,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
  },
  {
    id: 64,
    name: "Donut",
    price: 40,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500",
  },
  {
    id: 65,
    name: "Gulab Jamun",
    price: 35,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1666190092159-4d8c7d0b1c0f?w=500",
  },
  {
    id: 66,
    name: "Rasgulla",
    price: 35,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1601303516534-7d1e3d0f6b6d?w=500",
  },
  {
    id: 67,
    name: "Rasmalai",
    price: 50,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1605197161470-5d2b1b8b6a9c?w=500",
  },
  {
    id: 68,
    name: "Jalebi",
    price: 30,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500",
  },
  {
    id: 69,
    name: "Kaju Katli",
    price: 60,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1605197161470-5d2b1b8b6a9c?w=500",
  },
  {
    id: 70,
    name: "Gajar Ka Halwa",
    price: 50,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1601303516534-7d1e3d0f6b6d?w=500",
  },
  {
    id: 71,
    name: "Cheesecake",
    price: 90,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500",
  },
  {
    id: 72,
    name: "Red Velvet Cake",
    price: 80,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d7b4?w=500",
  },
  {
    id: 73,
    name: "Cupcake",
    price: 35,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=500",
  },
  {
    id: 74,
    name: "Waffles",
    price: 80,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=500",
  },
  {
    id: 75,
    name: "Pancakes",
    price: 70,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
  },
  {
    id: 76,
    name: "Chocolate Mousse",
    price: 65,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1511715112108-9acc2c7e9b69?w=500",
  },
  {
    id: 77,
    name: "Apple Pie",
    price: 70,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=500",
  },
  {
    id: 78,
    name: "Tiramisu",
    price: 100,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500",
  },
  {
    id: 79,
    name: "Churros",
    price: 60,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=500",
  },
  {
    id: 80,
    name: "Kulfi",
    price: 30,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
  },
],
}

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
