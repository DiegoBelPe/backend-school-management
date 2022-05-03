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

module.exports = {
  getAllGrade,
  getOneGrade,
  deleteGrade,
  createGrade,
  updateGrade,
};
