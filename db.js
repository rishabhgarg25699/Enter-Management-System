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
exports = module.exports = {
    getAllPerson
}