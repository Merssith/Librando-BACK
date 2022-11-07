const express = require("express");
const router = express.Router();
const bookOrders_controller = require("../controllers/bookOrdersController.js");

// GET ALL BOOK ORDERS
router.get("/", bookOrders_controller.index);

// GET BOOK ORDERS BY ORDER ID
router.get("/:orderId", bookOrders_controller.findByOrderId);

// CREATE BOOK ORDERS
router.post("/create", bookOrders_controller.createBookOrder);

module.exports = router;
