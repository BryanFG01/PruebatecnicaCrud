"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.render("welcome", { body: "Welcome to Task Manager" }); // Asegúrate de que estás pasando el cuerpo
});
//Ruta para la vista de inicio de sesión
exports.default = router;
