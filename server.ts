// import express, { Express } from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// import dotenv from 'dotenv';
// import foodRoutes from './routes/Food';
// import user from './routes/User.ts';
// import shoppingcart from './routes/shoppingcart';
// import review from './routes/Review';


const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrpyt = require('bcrypt')
require('dotenv').config({ path: '.env' });
const foodRoutes = require('./routes/Food.ts')
const user = require('./routes/User.ts')
const shoppingcart = require('./routes/shoppingcart.ts');
const review = require('./routes/Review.ts');
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
app.use('/reviews', review)
app.use('/cart',shoppingcart)

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));
//Start the server
const PORT = process.env.PORT ||8080
app.listen(PORT, console.log(`listening on port ${PORT}`))