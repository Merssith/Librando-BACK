const express = require("express");
const router = express.Router();
const product_controller = require("../controllers/productController.js");

// GET ALL PRODUCTS
router.get("/", product_controller.index);

// GET PRODUCT BY ID
router.get("/:id", product_controller.findById);

// CREATE NEW PRODUCT
router.post("/create", product_controller.createProduct);

// MODIFY PRODUCT
router.put("/change/:id", product_controller.changeProduct);

// DELETE PRODUCT
router.delete("/delete/:id", product_controller.deleteProduct);

module.exports = router;
