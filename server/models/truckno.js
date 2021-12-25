const mongoose = require('mongoose')

const turckTabelSchema = new mongoose.Schema({
  truckno:{type:String}
})

module.exports = mongoose.model('Truck',turckTabelSchema)