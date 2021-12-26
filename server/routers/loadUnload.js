const express = require('express')
const router = express.Router()

const load_unloadController = require('../controllers/load_unloadController')

router.get('/',load_unloadController.getloadUnloadHome)
module.exports = router