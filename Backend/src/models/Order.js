const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    items: [
      {
        name: String,
        price: Number,
        qty: Number,
      },
    ],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Placed", "Preparing", "Ready"],
      default: "Placed",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);