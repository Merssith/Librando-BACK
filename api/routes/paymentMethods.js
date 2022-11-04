const express = require("express");
const router = express.Router();
const paymentMethodsController = require("../controllers/paymentMethodsController");

//CREAR MÉTODO DE PAGO
router.post("/create", paymentMethodsController.createPM);

//LISTAR MÉTODOS DE PAGO
router.get("/", paymentMethodsController.index);

//ELIMINAR MÉTODO DE PAGO
router.delete("/delete/:id", paymentMethodsController.deletePM);

module.exports = router;
