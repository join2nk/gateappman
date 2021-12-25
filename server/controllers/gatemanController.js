//import schemans and dbs connections
const GateLog = require('../models/gatelogs')


const getMain = (req, res) => {
  //get label detaisl and send the details in the ejs template

  res.render('pages/gateman')
}
const postIn = (req, res) => {

}

const postOut = (req, res) => {

}
module.exports = {
  getMain,
  postIn,
  postOut
}