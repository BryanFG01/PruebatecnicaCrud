"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//model
const task_1 = __importDefault(require("../models/task"));
const users_1 = __importDefault(require("../models/users"));
router
    .route('/index')
    .get((req, res) => {
    res.render("users/index.hbs"); // registro de usuario
})
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    const newUsers = new users_1.default({ username, password, email });
    yield newUsers.save();
    res.redirect('/tasks/create'); //direciona a ruta de create
}));
router.route('/create')
    .get((req, res) => {
    res.render("tasks/create.hbs");
})
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tittle, descriptions } = req.body;
    const newTask = new task_1.default({ tittle, descriptions });
    yield newTask.save();
    res.redirect("/tasks/list");
}));
router.route('/list')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_1.default.find();
    res.render("tasks/list.hbs", { tasks: tasks });
}));
router.route('/delete/:id')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield task_1.default.findByIdAndDelete(id); // Elimina la tarea con el ID proporcionado
    res.redirect("/tasks/list.hbs");
}));
router
    .route("/edit/:id")
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const task = yield task_1.default.findById(id);
    res.render("tasks/edit.hbs", { task });
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { tittle, descriptions } = req.body;
    yield task_1.default.findByIdAndUpdate(id, { tittle, descriptions });
    res.redirect('/tasks/list');
}));
exports.default = router;
// enrutador task
