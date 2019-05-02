// var bcrypt = require('bcrypt');
let Joi = require('joi');
const User = require('../models/userSchema')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

//api to signup
let registerPost = (msg, callback) => {
    console.log("Data from Frontend\n",msg);
        const schema = Joi.object().keys({
            firstName : Joi.string().required(),
            lastName : Joi.string().required(),
            email: Joi.string().email().required(),
            password : Joi.string().required(),
            city : Joi.string().allow(null,''),
            state : Joi.string().allow(null,''),
            zip : Joi.string().allow(null,''),
            phone_number :Joi.string().allow(null,''),
            profile_pic : Joi.string().allow(null,''),
        });
        try {
            let firstName =msg.firstName;
            let lastName = msg.lastName;
            let email =msg.email;
            let password =msg.password;
            let city =msg.city || null;
            let state = msg.state || null;
            let zip = msg.zip || null;
            let phone_number = msg.phone_number || null;
            let profile_pic = msg.profile_pic || null;
            const user = { firstName: firstName, lastName: lastName, email:email, password:password,city:city,state:state,zip:zip,phone_number:phone_number,profile_pic:profile_pic};

            Joi.validate(user, schema, (err, value) => {
                if (err) {
                    callback({"success":false,"message":"Invalid Input! Please try again."}, null)
                }
                else{
                    bcrypt.hash(password, saltRounds, function(err, hash) {
                        if(err){
                            callback({"success":false,"message":"Something went wrong! Please try agin later"}, null)
                        }
                        User.findOne({ email: email }, function(user_error, user_obj) {
                            if (user_error){
                                callback({"success":false,"message":"Something went wrong! Please try agin later"}, null)
                            }
                            if(user_obj !== null){
                                callback({"success":false,"message":"User with same email already present"}, null)
                            }
                            let db_obj = new User({ firstName: firstName, lastName: lastName, email:email, password:hash,city:city,state:state,zip:zip,phone_number:phone_number,profile_pic:profile_pic})
                            db_obj.save().then(result => {
                                console.log("New User registered successfully\n",result);
                                callback(null,{"success":true,"message":"Registration successfull!"})
                            }).catch(err => {
                                callback({"success":false,"message":"User with same email already exists"},null)
                            })
                        });
                        
                    });
                }
            });
        }
        catch(error){
            console.log("Error",error);
            callback({"success":false,"message":"Invalid Input! Please try again."},null)
        }
}

//api to login
let loginPost = (msg, callback) => {
    console.log("Data from Frontend\n",msg);
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password : Joi.string().required(),
    });
    try{
        let email = msg.email;
        let password = msg.password;
        const user_obj = {email: email,password:password};
        Joi.validate(user_obj, schema, (err, value) => {
            if (err) {
                console.log("Inisde error")
                callback({"success":false,"message":"Invalid Input! Please try again."}, null)
            }
            else{
                User.find({ email: email }, function(err, result) {
                    if (err){
                        console.log("Error",err);
                        callback({"success":false,"message":"Something went wrong! Please try again"}, null)
                    }
                    else{
                        if (result.length == 0 ){
                            console.log("User with this email not present.")
                            callback({"success":false,"message":"User with this email not present"}, null)
                        }
                        else{
                            bcrypt.compare(password, result[0].password, function(err, password_res) {
                                if(password_res){
                                    let token = jwt.sign({id:result[0].id,email:result[0].email}, 'jwtSecretKey', { expiresIn: '30 days' });
                                    delete result[0].password
                                    console.log("User logged in\nSending 200 with JWT\n\n\n\n",token)
                                    callback(null,{"success":true,"message":"Sucessfully logged in","token":token,user:result[0]})
                                }
                                else{
                                    console.log("Incorrect password entered by user...Incorrect Password")
                                    callback({"success":false,"message":"Incorrect password"},null)
                                }
                            });
                        }
                    }
                });
            }
        });
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
		case 'loginPost':
            loginPost(msg,callback);
            break;
        case 'registerPost' :
            registerPost(msg,callback);
            break;
	}

}

exports.handle_request = handle_request;