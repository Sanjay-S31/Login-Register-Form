const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./mongo')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.get('/' , cors() , (req,res) => {

})

app.post('/' , async(req,res) => {
    const { email, pass } = req.body
    try{
        const isEmailExists = await User.findOne({email : email})
        if (isEmailExists) {
            res.json("Exist")
        }
        else{
            res.json("Not Exists")
        }
    }
    catch(error){
        res.json("Error occured ",error)
    }

})


app.post('/signup' , async(req,res) => {
    const { email, pass } = req.body
    const data = {
        email : email,
        password : pass
    } 
    try{
        const isEmailExists = await User.findOne({email : email})
        if (isEmailExists) {
            res.json("Exist")
        }
        else{
            res.json("Not Exists")
            await User.insertMany([data])
        }
    }
    catch(error){
        res.json("Error occured ",error)
    }
})

app.listen(8000,() => {
    console.log("Port is connected")
})
