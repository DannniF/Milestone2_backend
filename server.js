const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config({ path: '.env.local' });
const foodRoutes = require('./routes/Food')

const app = express()

//middlewares
//cors is for the front end
app.use(cors())
//tells server that it should parse out incoming json
app.use(express.json())
//allows Epxress application to parse incoming requests with URL-encoded payloads || easier to handle for data submitted via POST requests
app.use(express.urlencoded({extended: true}))

//routes
app.use('/auth', authRoutes)
app.use('/foods', foodRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


const PORT = process.env.PORT ||8080

app.listen(PORT, console.log(`listening on port ${PORT}`))