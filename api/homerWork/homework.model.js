const mongoose = require("mongoose");

const TareaSchema = new mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    observations: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Tarea = mongoose.model("Tarea", TareaSchema);

module.exports = Tarea;
