const moongose = require("mongoose");

const GradeSchema = new moongose.Schema(
  {
    grade: {
      type: Number,
      required: true,
      default: 301,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = moongose.model("Grade", GradeSchema);
