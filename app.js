require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")

const app = express()

mongoose.connect(process.env.MONGODB, (e) => {if(e){console.log(e + '\n-----Error')}else{console.log("database connected nk")}})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')



app.get('/',(req,res)=>{res.render('pages/gateman')})
const gatemanRouter = require(__dirname+'/server/routers/gateman/gateman')
app.use('/gateman',gatemanRouter)







const PORT = process.env.PORT||3000
app.listen(PORT,e=>{if(e){console.log(e)}else{console.log(`running at port ${PORT}`)}})