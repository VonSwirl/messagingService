var express = require('express');
const Message = require('../models/messageObj.js');
const messageService = require('../services/messageService.js');
var router = express.Router();

//new message page
router.get('/newmessage', function(req, res,next){
    res.render('newmessage.pug', {'person' : req.query.custid});
});


//Get a particular message 
router.get('/getmessage/:id', function(req, res, next){
    messageService.getMessageFromDb(req.query.messageid).then(function(message){
        res.send(message);
}).catch(next);

});

//gets a list of customers by the custid passed in (or id if they themselves are customers)
router.get('/',function(req, res,next){
    var qid = req.query.custid != null ? req.query.custid : req.params.id;
    messageService.getAListOfMessages(qid).then(function(messages){
        res.render('messagelist.pug',{message :  messages, name : qid});
    })
    
});


//new message being posted to the system (can also contain an invoice)
router.post('/', function(req, res, next){
    messageService.createNewMessage(req.body).then(function(message){
        res.redirect('/message/newmessage');
    }).catch(next);
});

module.exports = router;