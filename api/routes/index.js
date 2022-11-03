const express = require("express");
const router = express.Router();

const books = require("./book.js");
const orders = require("./order.js");
const users = require("./users");

router.use("/users", users);
router.use("/book", books);
router.use("/order", orders);

module.exports = router;
