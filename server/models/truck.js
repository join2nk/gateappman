const mongoose = require('mongoose')

const turckTabelSchema = new mongoose.Schema({
  truckno:{type:String},
  partyName:String,
  driver:String,
  transport:String,
  narration:String
})

module.exports = mongoose.model('truck',turckTabelSchema)