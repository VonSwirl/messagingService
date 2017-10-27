var express = require('express');

var router = express.Router();

//new message page
router.get('/:id', function(req, res){
    var t = req.get.id;
    res.json({type : "newMessage", sender: "test" , content:"i am a message"});
});

//new message being posted to the system (can also contain an invoice)
router.post('/:id', function(req, res){
    res.send('You are looking to post a messages that says ' + req.params.id);
});

module.exports = router;