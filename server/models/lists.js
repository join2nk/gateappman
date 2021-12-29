const mongoose = require("mongoose")

const listSchema = new mongoose.Schema({
  listName:String,
  lsitItems:[{itemName:String}]
})

module.exports = mongoose.model("List",listSchema)