var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connect to mongodb
mongoose.connect('mongodb://messageapp:mapp1@ds137435.mlab.com:37435/message-service');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());


//init routes
app.use('/message', require('./routes/message'));
app.use('/message/list', require('./routes/messagelist'));



app.listen(process.env.port || 3000);