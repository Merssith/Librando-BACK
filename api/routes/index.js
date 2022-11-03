const express = require("express");
const router = express.Router();

const books = require("./book.js");
const orders = require("./order.js");
const users = require("./users.js");
const status = require("./status.js");

router.use("/users", users);
router.use("/book", books);
router.use("/order", orders);
router.use("/status", status);

module.exports = router;
