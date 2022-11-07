const express = require("express");
const router = express.Router();

const books = require("./books.js");
const orders = require("./order.js");
const users = require("./users.js");
const status = require("./status.js");
const paymentMethods = require("./paymentMethods");
const reviews = require("./reviews.js");
const bookOrder = require("./bookOrder.js");

router.use("/users", users);
router.use("/books", books);
router.use("/order", orders);
router.use("/status", status);
router.use("/paymentMethods", paymentMethods);
router.use("/reviews", reviews);
router.use("/bookOrder", bookOrder);

module.exports = router;
