const {
  getAllStudent,
  getOneStudent,
  deleteStudent,
  createStudent,
  updateStudent,
  createMessageStudent,
  getHomeWorkStudent,

} = require('./student.service');

async function handlerAllStudent(req, res) {
  const students = await getAllStudent();
  res.json(students);
}

async function handlerOneStudent(req, res) {
  const { id } = req.params;

  const student = await getOneStudent(id);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Estudiante no encontrado' });
  }
}
async function handlerDeleteStudent(req, res) {
  const { id } = req.params;
  const student = await deleteStudent(id);

  if (!student) {
    res.status(404).json({ message: `estudiante no encontrado id ${id}` });
  } else {
    res.json({ message: `Estudiante con el id ${id} eliminado` });
  }
}
async function handlerCreateStudent(req, res) {
  const body = req.body;

  try {
    const newStudent = await createStudent(body);
    if (!newStudent) {
      res.status(404).json({ message: 'Estudiante no creado' });
    }
    else {
      res.status(201).json({ message: 'Estudiante creado' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error al crear estudiante, se requieren todos los espacios' });

  }

}
async function handlerUpdateStudent(req, res) {
  const { id } = req.params;
  const { body } = req;

  const student = await updateStudent(id, body);
  if(!student) {
    res.status(404).json({ message: `Estudiante no encontrado id ${id}` });
  }else {
    res.json({ message: `Estudiante con el id ${id} actualizado` });
  }

}

async function  handlerCreateMessage(req, res) {
  const { id } = req.params;
  const { body } = req;

  const mensaje = await createMessageStudent(id, body);
  if(!mensaje) {
    res.status(404).json({ message: `Estudiante no encontrado id ${id}` });
  }else {
    res.json({ message: `Estudiante con el id ${id} actualizado` });
  }
}


async function handlerGetAllTask(req, res) {
  const { id } = req.params;

  const task = await getHomeWorkStudent(id);
  if(!task) {
    res.status(404).json({ message: `Estudiante no encontrado id ${id}` });
  }else {
    res.json({ message: `Tareas con el id ${id} desplegadas con exito` });
  }
}




module.exports = {
  handlerAllStudent,
  handlerOneStudent,
  handlerDeleteStudent,
  handlerCreateStudent,
  handlerUpdateStudent,
  handlerCreateMessage,
  handlerGetAllTask,
};
