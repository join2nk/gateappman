const express = require('express')
const router = express.Router()

const kantaController = require('../../controllers/kantaController')
router.get('/',(req,res)=>{
  console.log('load unload route')
  res.send(
    'load unload route'
  )
})

module.exports = router