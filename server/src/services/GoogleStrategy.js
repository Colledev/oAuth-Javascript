const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function (passport) {
    passport.use(new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.REDIRECT_GOOGLE_URI,
            proxy: true,
        },
        function (accessToken, refreshToken, profile, done) {
            if (!profile) {
                return done(new Error('Failed to retrieve profile information'));
            }
            const user = {
                id: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
            };
            return done(null, user);
        })
    );

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
};
