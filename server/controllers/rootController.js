const Lists = require("../models/lists")
const Turck = require("../models/truck")
const Gatelog = require("../models/gatelog")


const getRoot = (req,res)=>{
  res.redirect('/gateman')
}

module.exports = {
  getRoot
}