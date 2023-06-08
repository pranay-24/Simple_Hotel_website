const express = require('express')
require('dotenv').config()

const path = require ('path')

//setup express server
const app = express()
const routes = require('./modules/pages/router')

// set up views
app.set('views',path.join(__dirname,"views"))
app.set('view engine','pug')

//for server to serve static files from public folder,use another middleware
app.use(express.static(path.join(__dirname,'public')));

//middleware 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//pages routes
app.use("/",routes)

//mongodb helper function


app.listen(process.env.PORT,()=>{
    console.log(`App listening at port http://localhost:${process.env.PORT}`)
    })
    
