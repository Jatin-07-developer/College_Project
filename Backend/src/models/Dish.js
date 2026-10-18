const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ["Snacks", "Meals", "Beverages", "Desserts"],
  },
  type: { type: String, default: "" },   // same field as in your data
  image: { type: String, default: "" },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Dish", dishSchema);