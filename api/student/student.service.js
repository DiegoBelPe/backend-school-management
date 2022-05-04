const StudentModel = require("./student.model");

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
}
async function createStudent(student) {
  const newStudent = await new StudentModel(student);
  return newStudent.save();
}
async function updateStudent(id, student) {
  const updStudent = await StudentModel.findByIdAndUpdate(id, student);
  return updStudent;
}

async function createMessageStudent(id, message){

  const student = await StudentModel.findByIdAndUpdate(id, {$push:{mensajes: message}}, {new: true});

  return student;
}



async function getHomeWorkStudent( id ){
  const homeWork = await StudentModel.findById(id).populate({ path: 'gradeId', select: 'homeWorks' });
  return homeWork;
}

module.exports = {
  getAllStudent,
  getOneStudent,
  deleteStudent,
  createStudent,
  updateStudent,
  createMessageStudent,
  getHomeWorkStudent,
};
