const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let exerciseSchema = new Schema({
    username : { 
        type: String, 
        required: true,
        unique: true, 
    },
    exercises : {
        type: Array, 
    },
   
});

module.exports = mongoose.model('Exercise', exerciseSchema);