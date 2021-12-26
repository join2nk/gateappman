const express = require('express')
const router = express.Router()

const kantaController = require('../../controllers/kantaController')
router.get('/',(req,res)=>{
  console.log('admin route')
  res.send(
    'admin route'
  )
})

module.exports = router