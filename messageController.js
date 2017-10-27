var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//Set up routes
app.use('/message', require('./routes/message'));
app.use('/message/list', require('./routes/messagelist'));



app.listen(process.env.port || 3000);