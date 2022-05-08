const {
  getAllGrade,
  getOneGrade,
  deleteGrade,
  createGrade,
  updateGrade,
  createHomeWorkGrade,
  getAllMessageGrade,
} = require("./grade.service");

async function handlerAllGrade(req, res) {
  const grades = await getAllGrade();
  res.json(grades);
}

async function handlerOneGrade(req, res) {
  const { id } = req.params;

  const grade = await getOneGrade(id);

  if (grade) {
    res.json(grade);
  } else {
    res.status(404).json({ message: "Grado no encontrado" });
  }
}
async function handlerDeleteGrade(req, res) {
  const { id } = req.params;
  const grade = await deleteGrade(id);

  if (!grade) {
    res.status(404).json({ message: `grado no encontrado con id ${id}` });
  } else {
    res.json({ message: `Grado con el id ${id} eliminado` });
  }
}
async function handlerCreateGrade(req, res) {
  const body = req.body;

  try {
    const newGrade = await createGrade(body);
    if (!newGrade) {
      res.status(404).json({ message: "Grado no creado" });
    } else {
      res.status(201).json({ message: "Grado creado" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al crear el grado, se requieren todos los espacios",
      });
  }
}
async function handlerUpdateGrade(req, res) {
  const { id } = req.params;
  const { body } = req;

  const grade = await updateGrade(id, body);
  if (!grade) {
    res.status(404).json({ message: `Grado no encontrado id ${id}` });
  } else {
    res.json({ message: `Grado con el id ${id} actualizado` });
  }
}

async function handlerCreateHomeWorkGrade(req, res, next) {
  const { id } = req.params;
  const course = req.body.course;
  const description = req.body.description;
  const observations = req.body.observations;
  const endDate = req.body.endDate;

  const newHomeWork = {
    course: course,
    description: description,
    observations: observations,
    endDate: endDate,
  };

  const task = await createHomeWorkGrade(id, newHomeWork);
  if (!task) {
    res.status(404).json({ message: `Grado no encontrado id ${id}` });
  } else {
    res.json({ message: `Grado con el id ${id} actualizado` });
  }
}

async function handlerGetMessageGrade(req, res) {
  const { id } = req.params;
  const messages = await getAllMessageGrade(id);
  if (!messages) {
    res.status(404).json({ message: `Grado no encontrado id ${id}` });
  } else {
    res.json(messages);
  }
}

module.exports = {
  handlerAllGrade,
  handlerOneGrade,
  handlerDeleteGrade,
  handlerCreateGrade,
  handlerUpdateGrade,
  handlerCreateHomeWorkGrade,
  handlerGetMessageGrade,
};
