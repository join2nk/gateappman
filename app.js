require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")

const app = express()

mongoose.connect(process.env.MONGODB, e=>(e?console.log(e+'\n-----Error'):console.log('database connected nk ')))


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')


const root = require(__dirname+'/server/routers/_index')
app.use('/',root)



const PORT = process.env.PORT || 3000
app.listen(PORT, e => (e?console.log(e):console.log(`server running at port ${PORT}`)))


app.use((req, res) => {res.send("<h2>error 404</h2>")})