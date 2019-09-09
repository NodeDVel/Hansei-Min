const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./database').sequelize;

dotenv.config();

const app = express();
sequelize.sync();

app.get('/', (req, res, next) => {
  res.send('<script>alert("실행 성공")</script>');
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.use('/Han-Min', require('./routes/apiControllers'));


const port = 8000;
app.listen(port, function () { console.log('Updated : Server listening at port %d', port); }); 

module.exports = app;