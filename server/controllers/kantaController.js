const ListModel = require("../models/lists")
const TruckModel = require("../models/truckno")
const GateLogModel = require("../models/gatelogs")

const getKantaHome = (req,res)=>{
  res.send('kanta page')
}

module.exports = {
 getKantaHome
}