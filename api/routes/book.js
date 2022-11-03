const express = require("express");
const router = express.Router();
const book_controller = require("../controllers/bookController.js");

// GET ALL PRODUCTS
router.get("/", book_controller.index);

// GET PRODUCT BY ID
router.get("/:id", book_controller.findById);

// CREATE NEW PRODUCT
router.post("/create", book_controller.createBook);

// CHANGE PRODUCT
router.put("/change/:id", book_controller.changeBook);

// SOFT DELETE PRODUCT
router.put("/delete/:id", book_controller.deleteBook);

module.exports = router;
