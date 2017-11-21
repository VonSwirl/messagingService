const Message = require('../models/messageObj.js');

function createNewMessage(message){
    return new Promise(function(resolve, reject){
        message.messageTo = message.messageTo.split(";");
        console.log(message.messageTo);
        if (message.messageTo.constructor == Array){
            for (var i = 0; i < message.messageTo.length; i++){
               Message.create({messageTo : message.messageTo[i], 
               content : message.content,
               doclink : message.doclink,
               senderid : message.senderid
            }).then(function(message){
                resolve(message);
            }).catch(function(err){
                reject(err);
            });
        }
        }else{
        Message.create(message).then(function(message){
            resolve(message);
        }).catch(function(err){
            reject(err);
        });


    }});
};

function getMessageFromDb(id){
    return new Promise(function(resolve, rej){
        Message.findById({_id: id}).then(function(res){
            console.log(res);
            resolve(res);
        }).catch(function(err){
            rej('No message found');
        });
    })
};

function getAListOfMessages(id){
    return new Promise(function(resolve, reject){
        Message.find({
            messageTo : id
        }).then(function(messages){
            resolve(messages);
        });
    })
}



module.exports = {createNewMessage, getMessageFromDb, getAListOfMessages};



