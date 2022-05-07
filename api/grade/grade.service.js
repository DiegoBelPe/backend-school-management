const GradeModel = require("./grade.model");

function getAllGrade() {
  return GradeModel.find();
}

async function getOneGrade(id) {
  const grade = await GradeModel.findById(id);
  if (!grade) {
    return null;
  }
  return grade;
}
async function deleteGrade(id) {
  const grade = await GradeModel.findByIdAndDelete(id);
  if (!grade) {
    return null;
  }
}
async function createGrade(grade) {
  const newGrade = await new GradeModel(grade);
  return newGrade.save();
}
async function updateGrade(id, grade) {
  const updGrade = await GradeModel.findByIdAndUpdate(id, grade);
  return updGrade;
}

async function createHomeWorkGrade(id, task){

  const homeWork = await GradeModel.findByIdAndUpdate(id, {$push:{homeWorks: task}}, {new: true});

  return homeWork;
}


async function getAllMessageGrade( id ){
  const messages = await GradeModel.findById(id).populate({ path: 'mensajes', select: 'remitente asunto mensaje' });
  return messages;
}



module.exports = {
  getAllGrade,
  getOneGrade,
  deleteGrade,
  createGrade,
  updateGrade,
  createHomeWorkGrade,
  getAllMessageGrade,
};
