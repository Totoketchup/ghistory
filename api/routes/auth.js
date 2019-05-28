const express = require('express');
const router = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const constants = require('../shared/constants');

passport.use(new GitHubStrategy({
    clientID: constants.GITHUB_CLIENT_ID,
    clientSecret: constants.GITHUB_CLIENT_SECRET,
    callbackURL: constants.BACKEND_ADDRESS+'/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('HEY');
    return cb(null, profile);
  }));

passport.serializeUser(function(user, cb) { cb(null, user); });
passport.deserializeUser(function(obj, cb) { cb(null, obj); });

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;
