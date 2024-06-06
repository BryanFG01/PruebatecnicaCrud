import {Router, Request, Response } from 'express';

const router = Router();
//anejador de peticiones
router.get("/", (req: Request, res: Response) => {
  res.render("index.hbs"); 
});
//Ruta para la vista de inicio de sesión


export default router;