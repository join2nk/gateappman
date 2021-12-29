const express = require('express')
const router = express.Router()

const controller = require('../controllers/gatemanController')
router.get('/',controller.getMain)
router.post('/truckIn',controller.postIn)
router.get('/truckOut',controller.postOut)

module.exports = router
