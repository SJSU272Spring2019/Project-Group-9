let Joi = require('joi');
let domain_base = require("../constants").domain_base;
const Section = require('../models/evaluationSectionSchema').section;
const evaluationAnswers = require("../models/evaluationAnserSchema");

let questionsGet = (user,msg,callback) => {
    try {
        // console.log("inside")
        Section.find().select({_id:0,"questions._id":0,"__v":0})
        .then((result) => {
            callback(null,{"success":true,"data":result})
        }).catch((error) => {
            console.log("Error",error);
            callback({"success":false,"message":"Something went wrong! Please try again"},null)
        })
    }
    catch(error){
        console.log("Error",error);
        callback({"success":false,"message":"Something went wrong! Please try again"},null)
    }
}

let saveAnswers = (user,msg,callback) => {
    try {
        let data = msg.data || {};
        let evalAnsObj = new evaluationAnswers({userId:user.id})
        for (let i=0;i<data.length;i++){
            evalAnsObj.answers.push({sectionId:data[i].sectionId,questionId:data[i].questionId,answer:data[i].answer})
        }
        evalAnsObj.save()
        .then((response) => {
            callback(null,{"success":true,"message":"Answers saved successfully."})
        })
        .catch((error) => {
            console.log("Error",error);
            callback({"success":false,"message":"Something went wrong! Please try again"},null)
        })
    }
    catch(error){
        console.log("Error",error);
        callback({"success":false,"message":"Something went wrong! Please try again"},null)
    }
}

function handle_request(data,callback){

    msg = data.msg
    type = data.type
    user = data.user
    // file = data.file

    switch (type) {
		case 'questionsGet':
            questionsGet(user,msg,callback);
            break;
        case 'saveAnswers':
            saveAnswers(user,msg,callback);
            break;
	}

}

exports.handle_request = handle_request;
