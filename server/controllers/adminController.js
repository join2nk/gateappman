const ListModel = require("../models/lists")
const TruckModel = require("../models/truckno")
const GateLogModel = require("../models/gatelogs")


const getAdminDashboard = (req,res)=>{
  let gateLogs = await GateLogModel.find()
  console.log(gateLogs+'tis is gage loasdkfa daksd a;flks')
  res.render('pages/admin',{gateLogs})
}

module.exports = {
  getAdminDashboard
}