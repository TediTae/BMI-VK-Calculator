const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const User = require('./models/User')
const expressSession = require('express-session')

mongoose.connect('mongodb://localhost/bmi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  /*useCreateIndex*/
})

app.use(expressSession({
  secret: 'testoteston'
}))

app.use(express.static('public'))

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false, limit: '250kb'}));
app.use('/', bodyParser.json({limit: '250kb'}));





const main = require('./routes/main')
app.use('/', main)

const users = require('./routes/users')
app.use('/users', users)

const contact = require('./routes/contact')
app.use('/contact', contact)

const hesaplar = require('./routes/hesaplar')
app.use('/hesaplar', hesaplar)

app.listen(port, hostname, () => {
  console.log(`Server çalişiyor, http://${hostname}:${port}/`)
})

