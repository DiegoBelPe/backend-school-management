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

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: true,
      lowercase: true,
    },
    identification: {
      type: Number,
      required: true,
      lowercase: true,
    },
    parentId: [
      { type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    gradeId: [
      { type: mongoose.Schema.Types.ObjectId,
        ref: "Grade"
      }
    ],
    mensajes: [MessageSchema],
    avatar: {
      type: String,
      default: 'https://res.cloudinary.com/borismg04/image/upload/v1651633044/jcs7g28mquibdzxxq2sc.png',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Student", StudentSchema);
