const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello testing");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://jgtiongzon:ilovefoods@backend.s6h99lo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Port 3000 is running");
    });
  })
  .catch(() => {
    console.log("Connection Failed :(");
  });