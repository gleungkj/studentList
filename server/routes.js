const express = require('express');
const { getAllStudents, addOneStudent } = require('./utils')

const router = express.Router()

router.get('/', async (req, res) => {
    const allStudentList = await getAllStudents()
    res.send(allStudentList);
  })

router.post(`/`, async (req, res) => {

    // add request body onto addOneStudent
    const newStudent = await addOneStudent({
      firstName: 'Dummy',
      lastName: 'Student',
      email: 'dummy@student.com',
      age: '13',
      grade: '2'
    })

    res.send(newStudent)
  });

router.get('/fakeData', async (req, res) => {
    const dummyData = 'someState'
    res.send(dummyData);
  });



module.exports = router

