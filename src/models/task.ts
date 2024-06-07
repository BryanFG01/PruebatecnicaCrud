import {Schema, model} from "mongoose";

const TaskSchema = new Schema({
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

export default model ("Task", TaskSchema );