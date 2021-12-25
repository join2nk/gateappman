const express = require('express')
const controller = require('../../controllers/gatemanController')
const router = express.Router()

router.get('/',controller.getMain)

module.exports = router
