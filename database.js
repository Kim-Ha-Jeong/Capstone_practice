const mysql = require('mysql');

const db = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'rlagkwjd0318',
    database: 'blackbox'
}

module.exports = {
    init: () => {
        return mysql.createConnection(db);
    },
    connect: (conn) => {
        conn.connect((err) => {
            if(err) console.error('mysql connection error: '+ err);
            else console.log('mysql is connected succesfully!');
        })
    }
}