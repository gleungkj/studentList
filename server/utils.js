const studentSchema = require('./models/students')

async function getAllStudents(mongoose){

  const studentList = mongoose.model('students', studentSchema)

  const findAllStudentRecords = await studentList.find({})

  return findAllStudentRecords

};

module.exports = getAllStudents