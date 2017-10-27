var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


//connect to mongodb
mongoose.connect('mongodb://messageapp:mapp1@ds137435.mlab.com:37435/message-service');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());


app.set('views', './views');
app.set('view engine', 'pug');


//init routes
app.use('/message', require('./routes/message'));
app.use('/messagelist', require('./routes/messagelist'));

//error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({err : err.message});
});

app.listen(process.env.port || 3000);