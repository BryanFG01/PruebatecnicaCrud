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
router
    .route("/register")
    .get((req, res) => {
    res.render("users/register.hbs");
})
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    const newUTask = new task_1.default({ username, password, email });
    yield newUTask.save();
    res.redirect("/tasks/list"); // Redirigir a la lista de tareas después del registro
}));
router.route('/create')
    .get((req, res) => {
    res.render("tasks/create.hbs");
})
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const newTask = new task_1.default({ title, description });
    yield newTask.save();
    res.redirect("/tasks/list");
}));
router.route('/list')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_1.default.find();
    res.render("tasks/list.hbs", { tasks });
}));
router.route('/delete/:id')
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield task_1.default.findByIdAndDelete(id);
    res.send('/tasks/list.hbs');
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
    const { title, description } = req.body;
    yield task_1.default.findByIdAndUpdate(id, { title, description });
    res.redirect('/tasks/list.hbs');
}));
exports.default = router;
// enrutador task
