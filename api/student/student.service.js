const StudentModel = require('./student.model');

function getAllStudent() {
  return StudentModel.find();
}

async function getOneStudent(id) {
  const student = await StudentModel.findById(id);
  if (!student) {
    return null;
  }
  return student;
}
async function deleteStudent(id) {
  const student = await StudentModel.findByIdAndDelete(id);
  if (!student) {
    return null;
  }

  return student;
}
async function createStudent(student) {
  const newStudent = await new StudentModel(student);
  return newStudent.save();
}
async function updateStudent(id, student) {
  const updStudent = await StudentModel.findByIdAndUpdate(id, student);
  return updStudent;
}

module.exports = {
  getAllStudent,
  getOneStudent,
  deleteStudent,
  createStudent,
  updateStudent,
};
