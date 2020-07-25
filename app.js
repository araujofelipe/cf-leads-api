const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const leads = require('./routes/leads.route')
const app = express()

const mongoose = require('mongoose')
let url =
  'mongodb+srv://coachfunnels:80eRQOPG7e5p1zYM@coachfunnels-0-yvayx.gcp.mongodb.net/coachfunnels?retryWrites=true&w=majority'
let mongoDB = process.env.MONGODB_URI || url
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/leads', leads)
const port = 3001

app.listen(port, () => console.log(`Leads app on port ${port}!`))
