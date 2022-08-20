require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');

const connectDB = require('./helper/connection');
const routes = require('./src/routes');

const { SECRET, PORT } = process.env;

const app = express();
connectDB();

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
});