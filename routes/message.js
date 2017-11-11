var express = require('express');
const Message = require('../models/messageObj.js');

var router = express.Router();

//new message page
router.get('/newmessage/:id', function(req, res,next){
    var t = req.get.id;
    res.render('newmessage.pug');
});




//Get a particular message 
router.get('/getmessage/:id', function(req, res, next){
    console.log(req.param.messageid);
    Message.findById({_id: req.query.messageid}).then(function(message){
        res.send(message);
}).catch(next);

});


//new message being posted to the system (can also contain an invoice)
router.post('/', function(req, res, next){
    console.log(req.body);
    if (req.body.messageTo.constructor == Array){
        for (var i = 0; i < req.body.messageTo.length; i++){
           console.log(req.body.messageTo[i]);
           Message.create({messageTo : req.body.messageTo[i], 
           content : req.body.content,
           doclink : req.body.doclink,
           senderid : req.body.senderid
        }).then(function(message){
            res.send(message);
        }).catch(next);
    };
    }else{
    Message.create(req.body).then(function(message){
        res.send(message);
    }).catch(next);}
});

module.exports = router;