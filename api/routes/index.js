const express = require("express");
const router = express.Router();

const products = require("./product.js");
const orders = require("./order.js");

router.use("/product", products);
router.use("/order", products);

module.exports = router;
