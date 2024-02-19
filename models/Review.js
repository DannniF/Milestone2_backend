//this is our data models for Reviews
const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required:true,
        min:1,
        max: 5
    },
    comment: {
        type: String,
        required: true,
        trim: true //Removes leading and trailing whitespace , i wonder how this looks like 
    }

});

module.exports = mongoose.model('Review',ReviewSchema)