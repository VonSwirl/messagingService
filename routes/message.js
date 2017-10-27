var express = require('express');
const Message = require('../models/messageObj.js');

var router = express.Router();

//new message page
router.get('/:id', function(req, res){
    var t = req.get.id;
    res.json({type : "newMessage", sender: "test" , content:"i am a message"});
});

//new message being posted to the system (can also contain an invoice)
router.post('/', function(req, res){
    Message.create(req.body).then(function(message){
        res.send(message);

    });
});

module.exports = router;