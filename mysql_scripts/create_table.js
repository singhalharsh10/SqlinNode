const mysql = require('mysql2')
const connection = mysql.createConnection({

    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'

})

connection.query(
    `CREATE TABLE IF NOT EXISTS persons (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    city VARCHAR(30)
)`, //backtick used for multiline strings
    function(err, results) {
        if (err)
            console.log(err)
        else {
            console.log('Table Created succesfully')
        }

        connection.close(); //To avoid memoryleak
    }
)