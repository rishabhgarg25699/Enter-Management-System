const check = require('express').Router()
const database = require('../db')

check.post('/', function(req, res) {
    console.log("Rishabh")
    console.log(req.body.task)
    database.search(req.body.task)
        .then(function() {
            res.redirect('/')
        })
        .catch(function(err) {
            res.send(err);
        })
})

module.exports = check;