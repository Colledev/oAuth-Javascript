const { Router } = require('express');
const router = Router();

router.get('/auth/error', (req, res) => {
    res.send('Error logging in');
});

router.get('/success', (req, res) => {

    if (req.user) {
        const { id, displayName, email } = req.user;
        const message = `Welcome, ${displayName}! Your email is ${email}.`;
        res.send(message);
    } else {
        res.redirect('/auth/error');
    }
});

module.exports = router;
