const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
//const mongoose = require('mongoose');

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    test: "It worked!",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
