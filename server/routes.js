const express = require('express');
const { getAllStudents, addOneStudent, removeStudentById } = require('./utils')

const router = express.Router()

const jsonParser = express.json()

router.get('/', async (req, res) => {
    const allStudentList = await getAllStudents()
    res.send(allStudentList);
  })

router.post(`/`, jsonParser, async (req, res) => {

    // add request body onto addOneStudent
    const newStudent = await addOneStudent({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      age: req.body.age,
      grade: req.body.grade
    })

    res.send(newStudent)
  });

router.delete('/', jsonParser, async(req, res) => {

  console.log('deleting student based on following details:')
  console.log(req.body)

    await removeStudentById(req.body._id)
})

router.get('/fakeData', async (req, res) => {
    const dummyData = 'someState'
    res.send(dummyData);
  });



module.exports = router

