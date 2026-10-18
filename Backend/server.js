require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/menu", require("./src/routes/menu"));
app.use("/api/orders", require("./src/routes/order"));
app.use("/api/admin", require("./src/routes/admin"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Connection error:", err.message));

app.listen(5000, () => console.log("Server running on port 5000"));