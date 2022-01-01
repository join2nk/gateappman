const Lists = require("../models/lists")
const Turck = require("../models/truck")
const Gatelog = require("../models/gatelog")


const getMain = async (req, res) => {

  let gatedata = await Gatelog.find()

  res.render('pages/gateman/home', {
    gatedata
  })
}

const postIn = (req, res) => {
  let {
    truckNo,
    narration,
    item = 'undifinded',
    quantity = ''
  } = req.body
 
  console.log(truckNo)
 

  let truckin = new Gatelog({truckNo,narration,item,quantity})
  truckin.save(console.log('saved'))

}


const postOut = (req, res) => {}


module.exports = {
  getMain,
  postIn,
  postOut
}