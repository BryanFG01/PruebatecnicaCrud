import {Router, Request, Response } from 'express';

const router = Router();

router.get("/", (req, res) => {
  res.render("welcome", { body: "Welcome to Task Manager" }); // Asegúrate de que estás pasando el cuerpo
});
//Ruta para la vista de inicio de sesión


export default router;