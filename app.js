const express = require('express')
const app = express()
const db_config = require(__dirname+'/database.js');
const conn = db_config.init();
const bodyParser = require('body-parser');

db_config.connect(conn);

app.use(express.json())

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})