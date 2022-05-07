const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  remitente: {
    type: String,
    required: true,
    lowercase: true,
  },
  asunto: {
    type: String,
    lowercase: true,
  },
  mensaje: {
    type: String,
    lowercase: true,
  },
});

const TareaSchema = new mongoose.Schema({
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
});

const GradeSchema = new mongoose.Schema(
  {
    grade: {
      type: Number,
      required: true,
      default: 301,
    },
    homeWorks: [
      TareaSchema
    ],
    students: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    }],
    admin: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }],
    mensajes: [MessageSchema],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Grade", GradeSchema);
