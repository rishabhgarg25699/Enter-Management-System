const route = require('express').Router()
const database = require('../db')

route.get('/', function(req, res) {
    database.getAllPerson()
        .then(function(test1) {
            res.send(test1)
        })
        .catch(function(err) {
            res.send({ error: err })
        })

})

route.post('/', function(req, res) {
    database.copy(req.body.task)
        .then(function() {
            res.send("1")
        })
        .catch(function(err) {
            res.send("0")
        })
})

module.exports = route;