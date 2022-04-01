const mongoose = require("mongoose");

const TareaSchema = new mongoose.Schema({
  course: String,
  description: String,
  observations: String,
  endDate: String,
});
const Tarea = mongoose.model("Tarea", TareaSchema);

module.exports = Tarea;
