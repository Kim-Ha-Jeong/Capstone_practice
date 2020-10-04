const mysql = require("mysql");
const dbConfig = require("./db.config.js");

const db = mysql.createConnection({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

db.connect(err => {
    if (err) console.error('err : '+err);
    else console.log('mysql is connected succesfully!');
})

module.exports = db;