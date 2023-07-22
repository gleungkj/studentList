const studentSchema = require('./models/students')

const mongoose = require('mongoose')

const studentModel = mongoose.model('students', studentSchema)

async function getAllStudents(){

  const findAllStudentRecords = await studentModel.find({})

  return findAllStudentRecords

};

async function addOneStudent({firstName, lastName, email, age, grade}){

  const newStudent = new studentModel({
    first_name: firstName,
    last_name: lastName,
    email: email,
    age: age,
    grade: grade
  })

  console.log(`adding one student with parameters: ${newStudent}`)

  newStudent.save()
}

async function removeStudentById(id) {
  await studentModel.findByIdAndDelete(id)  
}

module.exports = { getAllStudents, addOneStudent, removeStudentById } 