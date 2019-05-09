var async = require('async');
var exercise = require('../models/exerciseSchema');

let getExercises = (user, msg, callback) => {
    try {
        console.log("In getexercises topic service. Msg: ", msg)
        exercise.find( {"username":msg.username}, function(err,result){
            if (err) {
                console.log(err);
                console.log("unable to read the database");
                callback(err, "unable to read the database");
            } else 
                { 
                    callback(null, {status: 200, result});
            }       
        })
    }
    catch(error){
        console.log("Error",error);
        callback({"success":false,"message":"Invalid Input! Please try again."},null)
    }
}

let addExercise = (user, msg, callback) => {
    try {
        console.log("In addexercise Msg: ", msg)
        exercise.update( {"username":msg.username},{$push:{"exercises":msg.exercise}}, { upsert : true }, function(err,result){
            if (err) {
                console.log(err);
                console.log("unable to read the database");
                callback(err, "unable to read the database");
            } else 
                { 
                callback(null, {status: 200, result});
            }         
        })
    }
    catch(error){
        console.log("Error",error);
        callback({"success":false,"message":"Invalid Input! Please try again."},null)
    }
}

let deleteExercise = (user, msg, callback) => {
    try {
        exercise.update( {"username":msg.username},{$pull:{exercises:msg.exercise}})
        .then((exceriseObj) => {
            callback(null, {status: 200});
        }).catch((error) => {
            console.log("Error",error);
            callback({"success":false,"message":"Invalid Input! Please try again."},null)
        })
    }
    catch(error){
        console.log("Error",error);
        callback({"success":false,"message":"Invalid Input! Please try again."},null)
    }
}


function handle_request(data,callback){
    msg = data.msg
    type = data.type
    user = data.user
    console.log("type",type)
    switch (type) {
		case 'getExercises':
            getExercises(user,msg,callback);
            break;
        case 'addExercise' :
            addExercise(user,msg,callback);
            break;
        case 'deleteExercise' :
            deleteExercise(user,msg,callback);
            break;
	}

}

exports.handle_request = handle_request;