const express = require("express");
const router = express.Router();

const books = require("./books.js");
const orders = require("./order.js");
const users = require("./users.js");
const status = require("./status.js");
const cart = require("./cart");
const paymentMethods = require("./paymentMethods");

router.use("/users", users);
router.use("/books", books);
router.use("/order", orders);
router.use("/status", status);
router.use("/cart", cart);
router.use("/paymentMethods", paymentMethods);

module.exports = router;
