const tareas = [
  {
    id: 1,
    course: "Programacion",
    description: "react-mongo",
    observations: "enviar info",
    endDate: "22 / 03 / 2022",
  },
  {
    id: 2,
    course: "Español",
    description: "react-mongo",
    observations: "enviar info",
    endDate: "22 / 03 / 2022",
  },
  {
    id: 3,
    course: "Ingles",
    description: "react-mongo",
    observations: "enviar info",
    endDate: "22 / 03 / 2022",
  },
];

function getAllWork() {
  return tareas;
}

function getOneWork(id) {
  const tarea = tareas.find(tarea => tarea.id === Number(id));
  if (!tarea) {
    return null;
  }
  return tarea;
}
function deleteWork(id) {
  const tarea = tareas.find((tarea) => tarea.id === Number(id));
  if (!tarea) {
    return null;
  }

  tareas.splice(tareas.indexOf(tarea), 1);
  return tarea;
}
function createWork(tarea) {
  tarea.id = tareas.length + 1;
  tareas.push(tarea);
  return tarea;
}
function updateWork(id, tarea) {
  tareaAnterior = tareas.find((tarea) => tarea.id === Number(id));

  tareas.forEach((tareaAnterior) => {
    if (tareaAnterior.id === Number(id)) {
      tareaAnterior.course = tarea.course;
      tareaAnterior.description = tarea.description;
      tareaAnterior.observations = tarea.observations;
      tareaAnterior.endDate = tarea.endDate;
    }
  });
  return tarea;
}

module.exports = {
  getAllWork,
  getOneWork,
  deleteWork,
  createWork,
  updateWork,
}
