const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello testing");
});

//routes

app.use("/api/products", productRoute);

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
