const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rishabh',
    database: 'internship',
    password: '123'
});

function getAllPerson() {
    return new Promise(function(resolve, reject) {
        connection.query(
            "SELECT * FROM employee",
            function(err, rows, cols) {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        )
    })
}

function copy(fd) {
    return new Promise(function(resolve, reject) {
        connection.query(
            `insert into today_employee select * from employee where id=${fd}`,
            function(err, rows, cols) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        )
    })
}

function search(fd) {
    return new Promise(function(resolve, reject) {
        connection.query(
            `select * from employee where id = ${fd}`,
            function(err, rows, cols) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        )
    })
}

exports = module.exports = {
    getAllPerson,
    copy,
    search
}