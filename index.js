const express = require('express')
require('dotenv').config()

const path = require ('path')
const { MongoClient, ObjectId } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL)
//setup express server
const app = express()

// set up views
app.set('views',path.join(__dirname,"views"))
app.set('view engine','pug')

//for server to serve static files from public folder,use another middleware
app.use(express.static(path.join(__dirname,'public')));

//middleware 
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.listen(process.env.PORT,()=>{
    console.log(`App listening at port http://localhost:${process.env.PORT}`)
    })