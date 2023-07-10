const studentSchema = require('./models/students')

const mongoose = require('mongoose')

const studentModel = mongoose.model('students', studentSchema)

async function getAllStudents(){

  const findAllStudentRecords = await studentModel.find({})

  return findAllStudentRecords

};

async function addOneStudent({firstName, lastName, email, age, grade}){

  console.log('adding one student')

  const newStudent = new studentModel({
    first_name: firstName,
    last_name: lastName,
    email: email,
    age: age,
    grade: grade
  })

  newStudent.save()
}

module.exports = { getAllStudents, addOneStudent } 