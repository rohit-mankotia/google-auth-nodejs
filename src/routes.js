const passport = require('passport');
const express = require('express');

const { forbiddenTemplate } = require('../helper/templates');
const controller = require('./controller');
require('../helper/auth');

const router = express.Router();

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.send(forbiddenTemplate);
};

router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/failure'
}));

router.get('/', controller.login);
router.get('/profile', isLoggedIn, controller.profile);
router.get('/failure', controller.failure);
router.get('/logout', controller.logout);


module.exports = router;