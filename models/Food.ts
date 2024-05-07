//this is our data models
const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    profilePicture: {
        type: String,
        required: true,
        default: "https://cdn.vox-cdn.com/thumbor/5RIJEgjFeuX9FyVnToj2TASlT1E=/0x0:1600x900/1200x800/filters:focal(672x322:928x578)/cdn.vox-cdn.com/uploads/chorus_image/image/72503315/23.07_AI_Food_Photography__1_.0.png"
    },
    type: {
        type: String,
       required: true
    },
    price: {
        type: Number,
       required: true
    },
    description: {
        type: String,
    },
    section: {
        type: String,
        required: true,
        enum: ['frozen','deli','fruit','vegtables','canned','breads','drinks','dairy']
    },
    likes: {
        type:Number,
        required: true
    }

})

module.exports = mongoose.model('Food',FoodSchema)