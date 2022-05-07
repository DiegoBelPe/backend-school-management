const CalendarModel = require("./calendar.model");

function getAllEvents() {
  return CalendarModel.find();
}


async function deleteEvent(id) {
  const event = await CalendarModel.findByIdAndDelete(id);
  if (!event) {
    return null;
  }
}
async function createEvent(event) {
  const newEvent = await new CalendarModel(event);
  return newEvent.save();
}
async function updateEvent(id, event) {
  const updEvent = await CalendarModel.findByIdAndUpdate(id, grade);
  return updEvent;
}


module.exports = {
  getAllEvents,
  deleteEvent,
  createEvent,
  updateEvent,

};
