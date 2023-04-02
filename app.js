const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fareRoute = require('./routes/fareRoute')
const app = express()

mongoose.connect("mongodb://0.0.0.0:27017/Travel_card",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Connected")
})

dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(fareRoute)
app.listen(process.env.PORT,()=>{
    
    console.log('App is running on '+ process.env.PORT)
    
})