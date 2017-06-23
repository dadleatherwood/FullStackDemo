const express = require("express")
    , cors = require('cors')
    , { json } = require('body-parser')
    , port = 3000
    , app = express()
    , massive = require('massive')
    , session = require('express-session')
    , config = require('./server/config')
    , passport = require('passport')
    , { Strategy } = require('passport-facebook')

app.use(cors());
app.use(json());
app.use(session(config.session));
app.use('/', express.static(__dirname + '/public'))
massive(config.postgres).then(function(dbInstance){
  app.set('db', dbInstance)
})
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Strategy(config.Strategy, function(accessToken, refreshToken, profile, cb){
  return cb(null, profile);
}))
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate("facebook", {
  successRedirect: "/",
  failureRedirect: '/auth/facebook'
}))
passport.serializeUser(function(user, cb){
  cb(null, user);
})
passport.deserializeUser(function(obj, cb){
  cb(null, obj)
})


app.listen(port, () => {
  console.log("This is Dr Krane.... I'm listening")
})
