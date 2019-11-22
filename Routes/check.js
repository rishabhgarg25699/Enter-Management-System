const check = require('express').Router()
var nodemailer = require('nodemailer');
const database = require('../db')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rishabhgarg25699@gmail.com',
        pass: 'rishabh@121'
    }
});

check.post('/', function(req, res) {
    database.search(req.body.task)
        .then(function(test2) {

            var mailOptions = {
                from: 'rishabhgarg25699@gmail.com',
                to: test2[0].email,
                subject: 'AAja',
                text: `AAja Aaja Choosle`
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            // console.log(test2)
            console.log(test2[0].email)

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