const check = require('express').Router()
const database = require('../db')

check.post('/', function(req, res) {
    database.search(req.body.task)
        .then(() => res.redirect('/'))
        .catch((err) => res.send({ error: err }))
})

module.exports = check;