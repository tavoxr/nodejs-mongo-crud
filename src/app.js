const express = require('express')
const path =require('path')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')

//connecting db
 mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err))




// importing routes
const indexRoutes = require('./routes/index')

// settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
// app.use(express.json())

//routes
app.use('/',indexRoutes)






app.listen(app.get('port'), ()=>{

   console.log(`Server on Port ${app.get('port')}`)

})