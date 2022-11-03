const express = require("express");
const router = express.Router();

const products = require("./product.js");
const orders = require("./order.js");
const users = require("./users");

router.use("/users", users);
router.use("/product", products);
router.use("/order", orders);

module.exports = router;
