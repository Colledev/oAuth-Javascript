const { Router } = require('express');
const router = Router();
const passport = require('passport');

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/error'
  }),
  function (request, response) {
    response.redirect('/success');
});

module.exports = router;
