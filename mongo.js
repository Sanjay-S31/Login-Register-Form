const mongoose = require('mongoose')

const db = "mongodb://localhost:27017/UserDB"
mongoose.connect(db)
    .then((result) => {
        console.log("Database connected")
    })
    .catch(error => {
        console.log("Error DB not connected")
    })

const Schema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User' , Schema)

module.exports = User