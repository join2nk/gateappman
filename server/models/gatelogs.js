const mongoose = require("mongoose")

const gatelogSchema = new mongoose.Schema({
  date: {type:Date,default: Date.now},
  _trucknoId : mongoose.Schema.Types.ObjectId ,
  naration: String
})

module.exports = mongoose.model("gatelog",gatelogSchema)