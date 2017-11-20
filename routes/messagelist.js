var express = require('express');
const messageService = require('../services/messageService.js');
var router = express.Router();

//gets a list of customers by the custid passed in (or id if they themselves are customers)
router.get('/:id',function(req, res,next){
    var qid = req.query.custid != null ? req.query.custid : req.params.id;
    messageService.getAListOfMessages(qid).then(function(messages){
        console.log(messages);
        res.render('messagelist.pug',{message :  messages, name : qid});
    })
    
});


module.exports = router;