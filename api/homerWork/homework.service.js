const TareasModel = require('./homework.model');

function getAllWork() {
  return TareasModel.find();
}

async function getOneWork(id) {
  const tarea = await TareasModel.findById(id);
  if (!tarea) {
    return null;
  }
  return tarea;
}
async function deleteWork(id) {
  const tarea = await TareasModel.findByIdAndDelete(id);
  if (!tarea) {
    return null;
  }

  return tarea;
}
async function createWork(tarea) {
  const nuevaTarea = await new TareasModel(tarea);
  return nuevaTarea.save();
}
async function updateWork(id, tarea) {
  const actTarea = await TareasModel.findByIdAndUpdate(id, tarea);
  return actTarea;
}

module.exports = {
  getAllWork,
  getOneWork,
  deleteWork,
  createWork,
  updateWork,
};
