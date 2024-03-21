const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    fullName : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { collection: 'userDetails', versionKey: false });

const User = model('User', userSchema);

module.exports = User;