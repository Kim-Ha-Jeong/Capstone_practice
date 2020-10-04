const mysql = require("mysql");
const dbConfig = require("./db.config.js");

const db = {
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
};

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