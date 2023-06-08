const express = require('express')
const rooms = require('../rooms/func')
const router = express.Router()

router.get('/',(req,res)=>{
const roomsData = rooms.getAllData();
res.render("roomList",{rooms:roomsData})
})

// router.get('/About',(req,res)=>{
// const links = menulinks.getAllLinks();
// res.render("About",{menu:links})
// })

module.exports = router