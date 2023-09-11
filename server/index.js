const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    partno: {
      type: String,
      required: true,
      unique: true,
    },
    item: {
      type: String,
      required: true,
    },
    uom: {
      type: String,
      required: true,
      maxLength: 4,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected!"));

const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

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
    res.statusCode = 409;
    res.json(error);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
