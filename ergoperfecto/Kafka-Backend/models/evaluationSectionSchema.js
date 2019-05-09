var uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var sectionQuestionSchema = new Schema({
    id : { 
        type: String, 
        required: true,
        default:uuid.v1,
        unique: true,
    },
    title: {
        type: String, 
        required: true, 
        trim:true
    },
});


let sectionSchema = new Schema({
    id : { 
        type: String, 
        required: true,
        default:uuid.v1,
        unique: true,
    },
    name: {
        type: String, 
        required: true, 
        trim:true
    },
    questions : [sectionQuestionSchema],
});

module.exports = {
    section : mongoose.model('Section', sectionSchema),
    sectionQuestions : mongoose.model('SectionQuestions',sectionQuestionSchema)
}