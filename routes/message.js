var express = require('express');
const Message = require('../models/messageObj.js');
const messageService = require('../services/messageService.js');
var router = express.Router();
const tokenHandler = require('../config').tokenHandler;

//new message page
router.get('/newmessage', function(req, res,next){
    var id = req.query.custid;
    var tokenType = tokenHandler.getTokenType(req);
    if(tokenType){
        res.render('newmessage.pug', {'person' : id, 'type' : tokenType});
    }else{
        res.send('Token error');
    }
});


//Get a particular message - not actually needed currently
router.get('/getmessage/:id', function(req, res, next){
    messageService.getMessageFromDb(req.query.messageid).then(function(message){
        res.send(message);
}).catch(next);

});

//gets a list of customers by the custid passed in (or id if they themselves are customers)
router.get('/',function(req, res,next){
    var qid = req.query.custid != null ? req.query.custid : req.params.id;
    var tokenResult = tokenHandler.checkIfAuthorisedToSeeMessages(req,qid);
    if(!tokenResult){
        res.send('error -> unauthorised');
    }
    else{
        messageService.getAListOfMessages(qid).then(function(messages){
            res.render('messagelist.pug',{message :  messages, name : qid, type : tokenResult, custid : qid});
        });
    }
});


//new message being posted to the system (can also contain an invoice)
router.post('/', function(req, res, next){
    var message = req.body;
    if (tokenHandler.checkTokenOk(req)){
        messageService.createNewMessage(req.body).then(function(message){
            res.redirect('/message/newmessage');
        }).catch(next);
    }else{
        res.send('Token error');
    }
});

module.exports = router;