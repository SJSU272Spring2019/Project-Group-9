var uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var answerSubSchema = new Schema({
    id : { 
        type: String, 
        required: true,
        default:uuid.v1,
        unique: true,
    },
    sectionId : {
        type: String, 
        required: true, 
        trim:true,
        max: 30,
    },
    questionId : {
        type: String, 
        required: true, 
        trim:true,
        max: 30,
    },
    answer : {
        type: Boolean,
        required: true, 
    }
});


let evaluationAnswerSchema = new Schema({
    id : { 
        type: String, 
        required: true,
        default:uuid.v1,
        unique: true,
    },
    userId : {
        type: String, 
        required: true, 
        trim:true,
        max: 30,
    },
    answers : [answerSubSchema],
    createdOn: {
        type : Date, 
        default: Date.now,
    },
});

module.exports = mongoose.model('evaluationAnswers', evaluationAnswerSchema)