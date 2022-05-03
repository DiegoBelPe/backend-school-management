const moongose = require("mongoose");

const MessageSchema = new moongose.Schema({
  remitente:{
    type: String,
    required: true,
    lowercase: true,
  },
  asunto:{
      type: String,
      lowercase: true,
  },
  mensaje:{
      type: String,
      lowercase: true,
  },
});

const StudentSchema = new moongose.Schema(
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
    grade: {
      type: Number,
      required: true,
      lowercase: true,
    },
    mensajes:[
      MessageSchema
    ],

  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);


module.exports = moongose.model("Student", StudentSchema);


