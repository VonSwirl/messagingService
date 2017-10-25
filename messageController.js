var express = require('express');

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

//app.set('view engine', 'pug');

//index page
app.get('/', function(req,res){
    res.send("hello world");
});

//new invoice being posted to the system
app.post('/newInvoiceMessage/:id', function(req, res){
    res.send('You are looking to post a messages that says ' + req.params.id);
});


//new message page
app.get('/newmessagepage/:id', function(req, res){

    var t = req.get.id;
    res.json({sender: "test" , content:"i am a message"});
});

//message list page
app.get('/messageList/:id', function(req, res){
    res.send('you are asking for a message list for the customer with the id' + req.param.id);
});

//new message being posted to the system
app.post('/newMessage/:id', function(req, res){
    res.send('You are looking to post a messages that says ' + req.params.id);
});


app.listen(3000);