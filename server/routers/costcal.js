const express = require('express')
const router = express.Router()

const costcalController = require('../controllers/costcalController')
router.get('/',costcalController.getHome)

module.exports = router