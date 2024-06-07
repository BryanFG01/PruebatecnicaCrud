import { Router, Request, Response } from "express";

const router = Router();

//model
import Task from '../models/task';
import Users from '../models/users'

router
  .route('/index')
  .get((req: Request, res: Response) => {
    res.render("users/index.hbs"); // registro de usuario
  })
  .post(async (req: Request, res: Response) => {
    const { username, password, email } = req.body;
    const newUsers = new Users({ username, password, email });
    await newUsers.save();
    res.redirect('/tasks/create'); //direciona a ruta de create
  });

router.route('/create')
  .get((req: Request, res: Response) => {
    res.render("tasks/create.hbs");
  })
  .post(async(req: Request, res: Response) => {
    const { tittle, descriptions } = req.body;
    const newTask = new Task({ tittle, descriptions });
    await newTask.save();
    res.redirect("/tasks/list");
  });

router.route('/list')
.get(async(req: Request, res: Response) => {
    const tasks = await Task.find();
    res.render("tasks/list.hbs", {tasks: tasks});
    });

router.route('/delete/:id')
    .get(async(req: Request, res: Response) =>{
      const { id } = req.params;
      await Task.findByIdAndDelete(id); // Elimina la tarea con el ID proporcionado
      res.redirect("/tasks/list.hbs");
    });

router
  .route("/edit/:id")
  .get(async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render("tasks/edit.hbs", { task});
  })
  .post(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { tittle, descriptions } = req.body;
    await Task.findByIdAndUpdate(id, {tittle, descriptions });
    res.redirect('/tasks/list');
  });


export default router;


// enrutador task
