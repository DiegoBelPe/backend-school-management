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
    res.status(200).json(tarea);
  } else {
    res.status(404).json({ message: 'tarea no encontrada' });
  }
}
async function handlerDeleteWork(req, res) {
  const { id } = req.params;

  try {
    await deleteWork(id);
    res.status(200).json({ message: 'tarea eliminada' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar la tarea' });
  } finally {
    res.end();
  }
}
async function handlerCreateWork(req, res) {
  const nuevaTarea = req.body;

  try {
    const tarea = await createWork(nuevaTarea);
    res.status(201).json({ message: `Tarea ${tarea}creada con exito`, tarea });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la tarea' });
  }
}
async function handlerUpdateWork(req, res) {
  const { id } = req.params;
  const { body } = req;

  try {
    const tarea = await updateWork(id, body);
    console.log(tarea);
    res.json({ message: `Tarea ${tarea} actualizada con exito`, tarea });
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar la tarea' });
  }
}

module.exports = {
  handlerAllWork,
  handlerOneWork,
  handlerDeleteWork,
  handlerCreateWork,
  handlerUpdateWork,
};
