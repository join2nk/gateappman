const express = require("express")
const router=express.Router()

//routes
const kantaRouter = require('./kantaRouter')
const adminRouter = require('./adminRouter')
const gatemanRouter = require('./gatemanRouter')
const load_unloadRouter = require('./loadUnload')

router.use('/admin',adminRouter)
router.use('/kanta',kantaRouter)
router.use('/gateman',gatemanRouter)
router.use('/loadUnload',load_unloadRouter)


//controllers
const controller = require('../controllers/rootController')
router.get('/',controller.getRoot)


module.exports = router