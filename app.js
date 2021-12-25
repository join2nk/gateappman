require('dotenv').config()
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')
router.use(function timelog(req,res,next){
  console.log('time '+Date.now());
  next()
})


app.get('/',(req,res)=>{res.render('pages/gateman')})

const PORT = process.env.PORT||3000
app.listen(PORT,e=>{if(e){console.log(e)}else{console.log(`running at port ${PORT}`)}})