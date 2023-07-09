const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    grade: Number,
}, {collection: 'students'});



module.exports = studentSchema