const jwt = require('jsonwebtoken');

//This method pulls the token from with request string
function pullToken(req){
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    if(token){
        try{
            return jwt.decode(token, config.secret);
            
        }catch(err){
            return null;
        }
    }else{
        return null;
    }
}

function checkTokenOk(req){
    return module.pullToken(req) != null;
}


//This method checks if the user is able to see the messages (either they are the right customer or they are a staff member)  
function checkIfAuthorisedToSeeMessages(req, id){
    var decodedToken = pullToken(req);
    if(decodedToken){
        if(decodedToken.custId == id ){
          return "cust"
        }
        
        if(decodedToken.isStaff && decodedToken.canViewMessages){
            return "staff";
        }
    }
    return false;
}


module.exports = {checkIfAuthorisedToSeeMessages, pullToken, checkTokenOk};