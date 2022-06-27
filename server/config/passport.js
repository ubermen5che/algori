var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy(
    {
        clientID: "1086889885885-gqao631abs2f4n328lhv7qskjo15lg8p.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: '/auth/google/callback',
        passReqToCallback: true
    }, function (request, accessToken, refreshToken, profile, done) {
        console.log('profile: ', profile);
        var user = profile;

        done(null, user);
    }
));

module.exports = passport;