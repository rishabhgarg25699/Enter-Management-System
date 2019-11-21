const express = require('express')
const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
const todoRoute = require('./Routes/route')

server.use('/', express.static(__dirname + "/public"))
server.use('/route', todoRoute)
server.listen(4444);