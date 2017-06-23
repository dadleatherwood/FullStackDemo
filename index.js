const express = require('express')
  , cors = require('cors')
  , {json} = require('body-parser')
  , port = 3000
  , app = express()
  , massive = require('massive')
  , session = require('express-session')
  , config = require('./server/config')

  
