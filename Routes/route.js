const route = require('express').Router()
const database = require('../db')

route.get('/', function(req, res) {
    database.getAllPerson()
        .then(function(test1) {
            // console.log(test1);
            res.send(test1)
        })

    .catch(function(err) {
        res.send({ error: err })
    })

})

route.post('/check', function(req, res) {
    database.search(req.body.task)
        .then(() => res.send())
        .catch((err) => res.send({ error: err }))
})

route.post('/', function(req, res) {
    database.copy(req.body.task)
        .then(() => res.redirect('/'))
        .catch((err) => res.send({ error: err }))
})
module.exports = route;