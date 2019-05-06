var async = require('async');

var exercise = require('../models/exerciseSchema');


function handle_request(data,callback){

    msg = data.msg
    type = data.type
    
    switch (type) {
        case "addexercise":
        addexercise(msg,callback);
            break;
            case "getexercises":
            getexercises(msg,callback);
                break;
	}

}


function addexercise(msg, callback){

    console.log("In addexercise Msg: ", msg)
  
    exercise.update( {"username":msg.username},{$push:{"exercises":msg.exercise}}, { upsert : true }, function(err,result){
        if (err) {
            console.log(err);
            console.log("unable to read the database");
            callback(err, "unable to read the database");
        } else 
                   { 
                       callback(null, {status: 200, result});}
                
    })
}


function getexercises(msg, callback){

    console.log("In getexercises topic service. Msg: ", msg)
  
    exercise.find( {"username":msg.username}, function(err,result){
        if (err) {
            console.log(err);
            console.log("unable to read the database");
            callback(err, "unable to read the database");
        } else 
                   { 
                       callback(null, {status: 200, result});}
                
    })
}

exports.handle_request = handle_request;