var express = require('express');

const Message = require('../models/messageObj.js');
var router = express.Router();

//new message page
router.get('/:id', function(req, res,next){
    console.log(req.params.id);
    Message.find({
        messageTo : req.params.id
    }).then(function(messages){
        console.log(req.params);
        res.send(messages);
    });
});



module.exports = router;