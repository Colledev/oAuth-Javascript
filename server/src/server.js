const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');
const Router = require('./routes/Routes');
const GoogleRouter = require('./routes/GoogleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    if (req.session && req.session.passport && req.session.passport.user) {
        req.user = req.session.passport.user;
    }
    next();
});

app.use(passport.initialize());
require('./services/GoogleStrategy')(passport);

app.use('/', Router);
app.use('/', GoogleRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
