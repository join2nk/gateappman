const ListModel = require("../models/lists")
const TruckModel = require("../models/truckno")
const GateLogModel = require("../models/gatelogs")


const getMain = async(req, res) => {
  //get label detaisl and send the details in the ejs template
  res.render('pages/gateman')
}

const postIn = (req, res) => {}

const postOut = (req, res) => {}


module.exports = {
  getMain,
  postIn,
  postOut
}