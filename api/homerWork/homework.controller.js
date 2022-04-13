const {
  getAllWork,
  getOneWork,
  deleteWork,
  createWork,
  updateWork,
} = require('./homework.service');

async function handlerAllWork(req, res) {
  const tareas = await getAllWork();
  res.json(tareas);
}

async function handlerOneWork(req, res) {
  const { id } = req.params;

  const tarea = await getOneWork(id);

  if (tarea) {
    res.json(tarea);
  } else {
    res.status(404).json({ message: 'tarea no encontrada' });
  }
}
async function handlerDeleteWork(req, res) {
  const { id } = req.params;
  const tarea = await deleteWork(id);

  if (!tarea) {
    res.status(404).json({ message: `tarea no encontrada id ${id}` });
  } else {
    res.json({ message: `Tarea con el id ${id} eliminada` });
  }
}
async function handlerCreateWork(req, res) {
  const nuevaTarea = req.body;

  if (!nuevaTarea.course) {
    res.status(400).json({ message: 'La Tarea es requerida' });
  }

  if (!nuevaTarea.description) {
    res.status(400).json({ message: 'Descripcion es requerida' });
  } else {
    res.status(201).json({ Message: 'Tarea agregada!' });
  }

  const tarea = await createWork(nuevaTarea);
  return res.status(201).json(tarea);
}
async function handlerUpdateWork(req, res) {
  const { id } = req.params;
  const { body } = req;

  const tarea = await updateWork(id, body);

  /* if (!tarea) {
    res.status(404).json({ message: `tarea no encontrada id ${id}` });
  } else {
    res.json({ message: `Tarea con el id ${id} actualizada` });
  } */
  res.json(tarea);
}

module.exports = {
  handlerAllWork,
  handlerOneWork,
  handlerDeleteWork,
  handlerCreateWork,
  handlerUpdateWork,
};
