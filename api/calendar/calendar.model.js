const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema({
  start: {
    type: String,
    required: true,
    trim: true,
  },
  end: {
    type: String,
    required: false,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
});
module.exports = mongoose.model("Calendar", CalendarSchema);
