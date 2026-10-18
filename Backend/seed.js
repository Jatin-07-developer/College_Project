   require("dotenv").config();
   const mongoose = require("mongoose");
   const Dish = require("./src/models/Dish"); // change this path to where your Dish model is
   const menuData = require("./menuData");

   async function seed() {
     await mongoose.connect(process.env.MONGO_URI);
     await Dish.deleteMany({}); // clears old test dishes
     const all = [];
     for (const category in menuData) {
       menuData[category].forEach(({ id, ...rest }) => {
         all.push({ ...rest, category });
       });
     }
     await Dish.insertMany(all);
     console.log(`Inserted ${all.length} dishes`);
     process.exit();
   }
   seed();