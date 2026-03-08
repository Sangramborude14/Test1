const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname:{
    type: String, // Changed from Number
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Added uniqueness for auth
    },
    password: {
        type: String, // Changed from Number
        required: true
    },
    // confirmpassword removed; we only verify it on the server side
    user_type: {
        type: String,
        required: true,
        enum: ['guest', 'host'], // Changed 'user' to 'guest' to match form
        default: "guest"
    }
});

module.exports = mongoose.model('signUp', signupSchema, 'signUp_db');
