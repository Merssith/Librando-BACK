const express = require("express");
const router = express.Router();
const genres_controller = require("../controllers/genresController.js");

// GET ALL GENRES
router.get("/", genres_controller.index);

// GET GENRE BY ID
router.get("/:id", genres_controller.findByGenreId);

// GET PRODUCTS BY GENRE ID OR GENRE NAME
router.get("/list/:queryString", genres_controller.findBooksByGenreIdOrName);

// CREATE GENRE
router.post("/create", genres_controller.createGenre);

// CHANGE GENRE
router.put("/change/:id", genres_controller.changeGenre);

// DELETE GENRE
router.delete("/delete/:id", genres_controller.deleteGenre);

module.exports = router;
