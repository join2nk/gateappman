const ListModel = require("../models/lists")
const TruckModel = require("../models/truckno")
const GateLogModel = require("../models/gatelogs")


const getRoot = (req,res)=>{
  res.redirect('/gateman')
}

module.exports = {
  getRoot
}