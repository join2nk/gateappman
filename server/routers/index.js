const express = require("express")
const router=express.Router()

//routes
const kantaRouter = require('./kanta/kantaRouter')
const adminRouter = require('./adminRoute/adminRouter')
const gatemanRouter = require('./gateman/gatemanRouter')
const load_unloadRouter = require('./load_unload/loadUnload')

router.use('/admin',adminRouter)
router.use('/kanta',kantaRouter)
router.use('/gateman',gatemanRouter)
router.use('/loadUnload',load_unloadRouter)


//controllers
const controller = require('../controllers/rootController')
router.get('/',controller.getRoot)


module.exports = router