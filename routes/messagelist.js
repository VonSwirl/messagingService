
var express = require('express');

var router = express.Router();


//message list page
router.get('/:id', function(req, res){
    res.send('you are asking for a message list for the customer with the id' + req.param.id);
});



module.exports = router;