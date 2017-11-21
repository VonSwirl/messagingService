var express = require('express');
var app = express();
var bodyparse = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.databaseURL);
mongoose.Promise = global.Promise;

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended: true}));

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');


//init routes
app.use('/message', require('./routes/message'));

//error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({err : err.message});
});

app.listen(process.env.port || 3000);