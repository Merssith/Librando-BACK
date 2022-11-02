const express = require("express");
const router = express.Router();
const product_controller = require("../controllers/productController.js");

// GET ALL PRODUCTS
router.get("/", product_controller.index);

// GET PRODUCT BY ID
router.get("/:id", product_controller.findById);

// CREATE NEW PRODUCT
router.post("/create", product_controller.createProduct);

// CHANGE PRODUCT
router.put("/change/:id", product_controller.changeProduct);

// SOFT DELETE PRODUCT
router.put("/delete/:id", product_controller.deleteProduct);

module.exports = router;
