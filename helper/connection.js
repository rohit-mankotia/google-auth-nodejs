const mongoose = require('mongoose');
const url = process.env.MONGODB_URL;

const connectDB = () => {
    mongoose.connect(url, { useNewUrlParser: true });
    console.log('DB connected..!');
};

module.exports = connectDB;