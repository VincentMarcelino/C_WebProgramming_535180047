const express = require('express');

const router = express.Router();

router.get('/login', async (req, res) => {
  if (req.session.user) {
    res.redirect('/');
  } else {
    res.render('pages/login', { layout: false });
  }
});

router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "admin" && password === "admin") {
    req.session.user = "admin";
    res.redirect('/');
  } 
  else {
    res.render('pages/login', { layout: false, error: 'Wrong username or password.' });
  }
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.redirect('/auth/login');
});

module.exports = router;