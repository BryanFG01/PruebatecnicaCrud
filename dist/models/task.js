"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    tittle: {
        type: String,
        required: true,
        lowercase: true,
    },
    descriptions: {
        type: String,
        required: true,
        lowercase: true,
    }
});
exports.default = (0, mongoose_1.model)("Task", TaskSchema);
