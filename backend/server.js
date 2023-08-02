const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./src/Modules/todo.routes");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Successfully connected to MONGODB ..."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api", todoRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
