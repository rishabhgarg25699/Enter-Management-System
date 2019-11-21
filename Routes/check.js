const check = require('express').Router()
const database = require('../db')

check.post('/', function(req, res) {
    database.search(req.body.task)
        .then(function(test2) {
            if (test2.length == 0)
                res.send("0");
            else
                res.send("1");
        })
        .catch(function(err) {
            res.send(err);
        })
})

module.exports = check;