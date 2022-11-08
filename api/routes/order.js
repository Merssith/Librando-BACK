const express = require("express");
const router = express.Router();
const order_controller = require("../controllers/orderController.js");

// GET ALL ORDERS
router.get("/", order_controller.index);

// GET ORDER BY ID
router.get("/:id", order_controller.findByOrderId);

// CREATE NEW ORDER
router.post("/create", order_controller.createOrder);

// GET ORDERS BY USER ID
router.get("/userOrders/:id", order_controller.getOrdersByUserId);

// CHANGE ORDER
router.put("/change/:id", order_controller.changeOrder);

module.exports = router;
