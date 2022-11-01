const express = require("express");
const router = express.Router();

const products = require("./product.js");

router.use("/product", products);

module.exports = router;
