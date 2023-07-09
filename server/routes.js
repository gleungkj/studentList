const express = require('express');
const getAllStudents = require('./utils')
const mongoose = require('mongoose')

const router = express.Router()

router.get('/', async (req, res) => {
    const allStudentList = await getAllStudents(mongoose)
    res.send(allStudentList);
  })

router.get('/dummyRoute', async (req, res) => {
    const dummyData = {
        test: 'test',
        data: 'data'
    }
    res.send(dummyData);
  });

router.get('/fakeData', async (req, res) => {
    const dummyData = 'someState'
    res.send(dummyData);
  });



module.exports = router

