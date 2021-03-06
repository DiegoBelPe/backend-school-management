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
function updateWork(id, tarea) {
  return TareasModel.findByIdAndUpdate(id, tarea, { new: true });

}

module.exports = {
  getAllWork,
  getOneWork,
  deleteWork,
  createWork,
  updateWork,
};
