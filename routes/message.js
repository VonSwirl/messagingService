var express = require('express');
const Message = require('../models/messageObj.js');
const messageService = require('../services/messageService.js');
var router = express.Router();

//new message page
router.get('/newmessage/:id', function(req, res,next){
    res.render('newmessage.pug');
});


//Get a particular message 
router.get('/getmessage/:id', function(req, res, next){
    messageService.getMessageFromDb(req.query.messageid).then(function(message){
        res.send(message);
}).catch(next);

});


//new message being posted to the system (can also contain an invoice)
router.post('/', function(req, res, next){
    messageService.createNewMessage(req.body).then(function(message){
        res.send(message);
    }).catch(next);
});

module.exports = router;