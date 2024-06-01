"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('create')
    .get((req, res) => {
    res.render("views/auth");
});
/*router.get("/", (req: Request, res: Response) => {
  const tasks = [
    { _id: 1, title: "Task 1", description: "Description 1" },
    { _id: 2, title: "Task 2", description: "Description 2" },
  ];
  res.render("tasks", { tasks });
});

router.post("/", (req: Request, res: Response) => {
  // Implementa la lógica para crear una tarea
  res.redirect("/tasks");
});

router.post("/edit/:id", (req: Request, res: Response) => {
  // Implementa la lógica para editar una tarea
  res.redirect("/tasks");
});

router.post("/delete/:id", (req: Request, res: Response) => {
  // Implementa la lógica para eliminar una tarea
  res.redirect("/tasks");
});*/
exports.default = router;
