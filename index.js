const express = require('express')
  , cors = require('cors')
  , {json} = require('body-parser')
  , port = 3000
  , app = express()
  , massive = require('massive')
  , session = require('express-session')
  , config = require('./server/config')

  app.use(cors())
  app.use(json())
  app.use(session(config.session))

  app.use('/', express.static(__dirname + '/public'))
  massive(config.postgres).then(dbInstance => {
    app.set('db', dbInstance)
  })

  app.listen(port, function(){
    console.log("Listening at port 3000")
  })
