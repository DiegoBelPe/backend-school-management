const {
  getAllWork,
  getOneWork,
  deleteWork,
  createWork,
  updateWork,
} = require("./homework.service");

function handlerAllWork(req, res) {
  const tareas = getAllWork();
  res.json(tareas);
}

function handlerOneWork(req, res) {
  const id = req.params.id;
  const tarea = getOneWork(id);

  if (!tarea) {
    res.status(404).json({ message: "tarea no encontrada" });
  } else {
    res.json(tarea);
  }
}
function handlerDeleteWork(req, res) {
  const id = req.params.id;
  const tarea = deleteWork(id);

  if (!tarea) {
    res.status(404).json({ message: `tarea no encontrada id ${id}` });
  } else {
    res.json({ message: `Tarea con el id ${id} eliminada` });
  }
}
function handlerCreateWork(req, res) {
  const nuevaTarea = req.body;

  if (!nuevaTarea.course) {
    res.status(400).json({ message: "La Tarea es requerida" });
  }

  if (!nuevaTarea.description) {
    res.status(400).json({ message: "Descripcion es requerida" });
  } else {
    res.status(201).json({ Message: "Tarea agregada!" });
  }

 const tarea = createWork(nuevaTarea)
  return res.status(201).json(tarea);
}
function handlerUpdateWork(req, res) {
  const id = req.params.id;
  const { body } = req;

  const tarea = updateWork(id, body);

  if (!tarea) {
    res.status(404).json({ message: `tarea no encontrada id ${id}` });
  } else {
    res.json({ message: `Tarea con el id ${id} actualizada` });
  }
  res.json(tarea);
}

module.exports = {
  handlerAllWork,
  handlerOneWork,
  handlerDeleteWork,
  handlerCreateWork,
  handlerUpdateWork,
};
