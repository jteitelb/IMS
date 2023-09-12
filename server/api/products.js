const { Router } = require("express");
const { Product } = require("../models/Product");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find({}, "partno item uom amount");
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Product.create({
      partno: req.body.partno,
      item: req.body.item,
      uom: req.body.uom,
      amount: parseInt(req.body.amount),
    });
    res.json(newProduct);
  } catch (error) {
    if (error.name == "MongoServerError") {
      res.status(409);
    } else if (error.name == "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

router.get("/:partno", async (req, res, next) => {
  try {
    const product = await Product.findOne(
      { partno: req.params.partno },
      "partno item uom amount"
    );
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete("/:partno", async (req, res, next) => {
  try {
    const product = await Product.deleteOne({ partno: req.params.partno });
    if (product.deletedCount === 0) {
      const error = new Error(
        `Could not find item with partno ${req.params.partno}`
      );
      res.status(204);
    }
    res.json(product);
  } catch (error) {
    res.status(500);
    next(error);
  }
});

module.exports = router;
