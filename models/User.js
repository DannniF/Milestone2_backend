//this is our data models
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        fullName: { type: String, set: (names) => names.firstName + ' ' + names.lastName }
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'], default: 'user'
    },
    createdAt: {
        type: Date, default: Date.now
    },
});

module.exports = mongoose.model('User',UserSchema)