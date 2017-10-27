const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create message schema
const MessageSchema = new Schema ({
    messageTo : {
        type : String, 
        required : [true, "Message to is required"]
    },
    content : {
        type : String, 
        required : [false]
    },
    date : {
        type : Date, 
        default : Date.now
    },
    doclink : {
        type : String, 
        required : [false]
    }, 
    senderid : {
        type : String, 
        required : [false]
    }

});


const Message = mongoose.model('message', MessageSchema);


module.exports = Message;