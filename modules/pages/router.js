const express = require('express')
const rooms = require('../rooms/func')
const router = express.Router()



router.get('/',(req,res)=>{
res.render("Homepage")
})

router.get('/roomlist',async(req,res)=>{
const roomsData = await rooms.getAllData();
res.render("roomList",{roomsData:roomsData})
console.log(roomsData)
})

router.get('/about',(req,res)=>{
// const links = menulinks.getAllLinks();
// res.render("About",{menu:links})
res.render("About")
})

module.exports = router