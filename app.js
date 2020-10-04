const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const indexRouter = require('./router/index');
const userRouter = require('./router/user');
const fullRouter = require('./router/full');
const editedRouter = require('./router/edited');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/full', fullRouter);
app.use('/edited', editedRouter);

module.exports = app;