const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    googleId: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);