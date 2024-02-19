const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const foodRoutes = require('./routes/Food')
const reviewRoutes = require('./routes/Review')

const app = express()

//middlewares
//cors is for the front end
app.use(cors())
//tells server that it should parse out incoming json
app.use(express.json())

//routes
app.use('/foods', foodRoutes)

//routes
app.use('/Review', reviewRoutes)


// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


const PORT = process.env.PORT ||8080

app.listen(PORT, console.log(`listening on port ${PORT}`))