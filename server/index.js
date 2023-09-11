const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");
const { Product } = require("./models/Product");

const app = express();

mongoose.connect(process.env.DB_URI).then(() => console.log("DB Connected!"));

app.use(morgan("dev"));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "IMS" });
});

app.use("/products", express.urlencoded({ extended: false }));

app.get("/products", async (req, res) => {
  const products = await Product.find({}, "partno item uom amount");
  res.json(products);
});

app.get("/products/:partno", async (req, res) => {
  const product = await Product.findOne(
    { partno: req.params.partno },
    "partno item uom amount"
  );
  res.json(product);
});

app.delete("/products/:partno", async (req, res) => {
  const product = await Product.deleteOne({ partno: req.params.partno });
  res.json(product);
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = await Product.create({
      partno: req.body.partno,
      item: req.body.item,
      uom: req.body.uom,
      amount: parseInt(req.body.amount),
    });
    res.json(newProduct);
  } catch (error) {
    res.status(409);
    res.json(error);
  }
});

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
