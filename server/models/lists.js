const mongoose = require("mongoose")

const listSchema = new mongoose.Schema({
  listName:String,
  lsitItems:[{itemName:String,groupName:String}]
})

module.exports = mongoose.model("list",listSchema)