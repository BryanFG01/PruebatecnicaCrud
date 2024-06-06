"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//anejador de peticiones
router.get("/", (req, res) => {
    res.set('index');
});
//Ruta para la vista de inicio de sesión
exports.default = router;
