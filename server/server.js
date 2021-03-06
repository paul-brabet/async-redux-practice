var path = require('path')
var express = require('express')

var redditRoutes = require('./reddit')
var server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/reddit', redditRoutes)

module.exports = server
