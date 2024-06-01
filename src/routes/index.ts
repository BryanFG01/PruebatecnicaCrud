import {Router, Request, Response } from 'express';

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index"); 
});
//Ruta para la vista de inicio de sesión


export default router;