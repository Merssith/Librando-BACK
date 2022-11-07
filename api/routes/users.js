const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middlewares/auth");
const userController = require("../controllers/usersController");

//RUTA GET ALL USERS
router.get("/", userController.getUsers);

//RUTA PARA REGISTRO
router.post("/register", userController.createUser);

//RUTA PARA LOGIN
router.post("/login", userController.loginUser);

//RUTA PARA LOGOUT
router.get("/logout", userController.logoutUser);

//RUTA PARA EDITAR UN USUARIO
router.put("/:id", userController.editUser);

// //RUTA PARA DEVOLVER USUARIO LOGGEADO (SI LO HAY)
// router.get("/me",validateAuth, userController.getMe);

// //RUTA PARA PROMOVER UN ADMINISTRADOR...
// router.patch("/admin/:id", isAdmin, userController.promoveAdmin);

// //RUTA PARA ELIMINAR UN USUARIO...
// router.delete("/:id", isAdmin, userController.deleteUsers);

// //RUTA PARA VER TODOS LOS USUARIOS...
// router.get("/", isAdmin, userController.getUsers);

module.exports = router;
