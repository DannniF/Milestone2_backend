const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrpyt = require('bcrypt')
require('dotenv').config({ path: '.env.local' });
const foodRoutes = require('./routes/Food')
const reviewRoutes = require('./routes/Review')
const user = require('./routes/User')

const app = express()

//middlewares
//cors is for the front end
app.use(cors())
//tells server that it should parse out incoming json
app.use(express.json())
//allows Epxress application to parse incoming requests with URL-encoded payloads || easier to handle for data submitted via POST requests
app.use(express.urlencoded({extended: true}))

//routes
app.use('/api/user', user)
app.use('/foods', foodRoutes)
app.use('/reviews', reviewRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

//Start the server
const PORT = process.env.PORT ||8080
app.listen(PORT, console.log(`listening on port ${PORT}`))