const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ["Snacks", "Meals", "Beverages", "Desserts"],
  },
  isVeg: { type: Boolean, default: true },
  image: { type: String, default: "" },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Dish", dishSchema);