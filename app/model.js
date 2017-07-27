const mongoose = require('mongoose');
mongoose.Promise = Promise;

const Schema = mongoose.Schema;                           //schema initialization in a variable

mongoose.connect('mongodb://localhost:27017/mail');       //initialization connect at database

// Definition to composition of mail
const mailSchema = new Schema({
    name:{
        type:String,
        required:true},
    addressMail:{
        type:String,
        required:true,
        unique:true,
        match:/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/   // check email is correct with a regex
    },
});


const Mail = mongoose.model('Mail', mailSchema);      // attribution property mailSchema of constant Mail

exports.Mail = Mail;                                  //export constant Mail to use in other files
