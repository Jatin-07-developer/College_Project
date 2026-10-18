const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish");
const auth = require("../middlewares/auth");

// GET all dishes (public). Customers only see available dishes.
// Use ?all=true to include hidden ones as well.
router.get("/", async (req, res) => {
  try {
    const filter = req.query.all === "true" ? {} : { available: true };
    const dishes = await Dish.find(filter);
    res.json(dishes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add a dish, or an array of dishes (admin only)
router.post("/", auth, async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const dishes = await Dish.insertMany(req.body);
      return res.status(201).json(dishes);
    }
    const dish = await Dish.create(req.body);
    res.status(201).json(dish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT edit a dish (admin only)
router.put("/:id", auth, async (req, res) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!dish) return res.status(404).json({ message: "Dish not found" });
    res.json(dish);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a dish (admin only)
router.delete("/:id", auth, async (req, res) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    if (!dish) return res.status(404).json({ message: "Dish not found" });
    res.json({ message: "Dish deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;