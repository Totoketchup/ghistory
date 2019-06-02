const express = require('express');
const router = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const constants = require('../shared/constants');
const querystring =  require('querystring');

passport.use(new GitHubStrategy({
    clientID: constants.GITHUB_CLIENT_ID,
    clientSecret: constants.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost/api/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, { profile, accessToken });
  }));

passport.serializeUser(function(user, cb) { cb(null, user); });
passport.deserializeUser(function(obj, cb) { cb(null, obj); });

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/github' }),
  function(req, res) {
    const returnedUser = {
      user: req.user.profile._raw,
      accessToken: req.user.accessToken
    }
    // Successful authentication, redirect home.
    const string = querystring.stringify(returnedUser);
    console.log(string);
    res.redirect(constants.FRONTEND_ADDRESS + '/login/?' + string);
  });

module.exports = router;
