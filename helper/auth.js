const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const { checkUser } = require('../src/controller');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } = process.env;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL,      //'http://yourdomain:3000/auth/google/callback'
    passReqToCallback: true
},
    async (request, accessToken, refreshToken, profile, done) => {
        await checkUser(profile);
        return done(null, profile);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});