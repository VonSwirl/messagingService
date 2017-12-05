
var tokenHandler = require('./utility/tokenHandler.js')

var faketrue = function(){return true};

var dev = {'databaseURL' :  'mongodb://messageapp:mapp1@ds137435.mlab.com:37435/message-service', 
            'tokenHandler' : {'checkTokenOk' : faketrue, 'checkIfAuthorisedToSeeMessages' : function(){return "cust"}, 'pullToken' : faketrue,
              'getTokenType' : function(){return "cust"}}};
var standard = {'databaseURL' :  'mongodb://messageapp:mapp1@ds137435.mlab.com:37435/message-service',
                'tokenHandler' : tokenHandler}
var test = {'databaseURL' :  'mongodb://messageapp:mapp1@ds137435.mlab.com:37435/message-service',
        'tokenHandler' : {'checkTokenOk' : faketrue, 'checkIfAuthorisedToSeeMessages' : function(){return "staff"}, 'pullToken' : faketrue,
        'getTokenType' : function(){return "staff"}}}

var config = function () {
    switch (process.env.NODE_ENV) {
        case 'development':
            return dev;
        case 'standard':
            return standard;
        default:
            return dev;
    }
}


module.exports = config();