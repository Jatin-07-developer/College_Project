require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./src/models/Admin"); // change the path if needed

async function createAdmin() {
  const [username, password] = process.argv.slice(2);

  if (!username || !password) {
    console.log("Usage: node createAdmin.js <username> <password>");
    process.exit(1);
  }

  await mongoose.connect(process.env.MONGO_URI);

  const exists = await Admin.findOne({ username });
  if (exists) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashed = await bcrypt.hash(password, 10);
  await Admin.create({ username, password: hashed });

  console.log("Admin created");
  process.exit();
}

createAdmin();