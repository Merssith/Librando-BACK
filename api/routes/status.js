const express = require("express");
const router = express.Router();
const statusController = require("../controllers/statusController");

//CREAR ESTADO
router.post("/create", statusController.createStatus);

//LISTAR ESTADOS
router.get("/", statusController.index);

//ELIMINAR ESTADO
router.delete("/delete/:id", statusController.deleteStatus);

module.exports = router;
