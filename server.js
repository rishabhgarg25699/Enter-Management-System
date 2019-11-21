const express = require('express')
const server = express()
const todoRoute = require('./Routes/route')
const todoCheck = require('./Routes/route/check')

server.use(express.json())
server.use(express.urlencoded({ extended: true }))



server.use('/', express.static(__dirname + "/public"))
server.use('/route', todoRoute)
server.use('/check', todoCheck)
server.listen(4444);