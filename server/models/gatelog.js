const mongoose = require("mongoose")
const truck = require('./truck')
const enums = require('./enum.json')
/**
 * data | truckId
 */
mongoose.Schema.Types.String.set('trim', true);

const gatelogSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  truckNo: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true,
    enum:enums.item.paddy
  },
  quantity: {
    type: Number
  }
})
console.log(enums.item.paddy)
module.exports = mongoose.model("gatelog", gatelogSchema)