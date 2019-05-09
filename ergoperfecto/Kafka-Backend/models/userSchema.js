var uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    id : { 
        type: String, 
        required: true,
        default:uuid.v1,
        unique: true, 
    },
    firstName : {
        type: String, 
        required: true, 
        max: 100,
        trim:true, 
    },
    lastName : {
        type: String, 
        required: true, 
        max: 100,
        trim:true, 
    },
    email: {
        type: String, 
        required: true, 
        max: 30,
        unique: true,
        trim:true,
    },
    password: {
        type: String, 
        required: true, 
        max: 100,
        trim:true
    },
    phone_number: {
        type: String, 
        required: false, 
        max: 30,
        trim:true,
        default : '',
    },  
    city: {
        type: String, 
        required: false, 
        max: 30,
        trim:true,
        default : '',
    },
    zip : {
        type: String, 
        required: false, 
        max: 10,
        trim:true,
        default : '',
    }, 
    country: {
        type: String, 
        required: false, 
        max: 30,
        trim:true
    },
    profile_pic: {
        type: String, 
        required: false,
        trim:true,
        default : '',
    },
});

module.exports = mongoose.model('User', userSchema);