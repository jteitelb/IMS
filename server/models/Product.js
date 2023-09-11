const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    partno: {
      type: String,
      required: true,
      unique: true,
    },
    item: { type: String, required: true },
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

module.exports = { Product };
