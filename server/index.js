const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");
const products = require("./api/products");

const app = express();

mongoose.connect(process.env.DB_URI).then(() => console.log("DB Connected!"));

app.use(morgan("dev"));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use("/", express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "IMS" });
});

app.use("/products", products);

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
