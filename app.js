const express = require('express');
const app = express();

const db_config = require(__dirname+'/database.js');
const conn = db_config.init();
db_config.connect(conn);
const bodyParser = require('body-parser');

const indexRouter = require('./router/index');
const userRouter = require('./router/user');

app.use(express.json());
app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});

app.use('/', indexRouter);
app.use('/user', userRouter);

module.exports = app;