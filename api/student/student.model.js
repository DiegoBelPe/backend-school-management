const moongose = require("mongoose");

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
    
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = moongose.model("Student", StudentSchema);
