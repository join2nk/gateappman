const express = require('express')
const router = express.Router()

const controller = require('../controllers/gatemanController')
router.get('/',controller.getMain)

module.exports = router
