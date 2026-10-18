const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Dish = require("../models/Dish");
const auth = require("../middlewares/auth");

// POST place a new order (public)
router.post("/", async (req, res) => {
  try {
    const { customerName, phone, items } = req.body;

    if (!customerName || !phone || !Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ message: "Name, phone and at least one item are required" });
    }

    // fetch the real dishes so prices always come from the database
    const ids = items.map((i) => i._id);
    const dishes = await Dish.find({ _id: { $in: ids } });

    const orderItems = [];
    let total = 0;

    for (const item of items) {
      const dish = dishes.find((d) => d._id.toString() === item._id);
      const qty = Number(item.qty);

      if (!dish || !qty || qty < 1) {
        return res.status(400).json({ message: "Invalid item in cart" });
      }

      orderItems.push({ name: dish.name, price: dish.price, qty });
      total += dish.price * qty;
    }

    const order = await Order.create({
      customerName,
      phone,
      items: orderItems,
      total,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all orders, newest first (admin only)
router.get("/", auth, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one customer's order history by phone number (public)
router.get("/history/:phone", async (req, res) => {
  try {
    const orders = await Order.find({ phone: req.params.phone }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH update an order's status (admin only)
router.patch("/:id/status", auth, async (req, res) => {
  try {
    const { status } = req.body;
    if (!["Placed", "Preparing", "Ready"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;