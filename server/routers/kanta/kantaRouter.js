const express = require('express')
const router = express.Router()



const kantaController = require('../../controllers/kantaController')
router.get('/',kantaController.getKantaHome)

module.exports = router