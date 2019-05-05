let Joi = require('joi');
let domain_base = require("../constants").domain_base;
const User = require('../models/userSchema');

let profileGet = (user,msg,callback) => {
    try {

        User.findOne({ email: user.email }).select({password:0,email:0,id:0,_id:0})
        .then((result) => {
            if (result === null)
                {
                    console.log("No user found with given email");
                    callback({"success":false,"message":"Something went wrong! Please try again"},null)
                }
                else{
                    callback(null,{"success":true,"data":result})
                }
        }).catch((error) => {
            console.log("Error",error);
            callback({"success":false,"message":"Something went wrong! Please try again"},null)
        })
    }
    catch(error){
        callback({"success":false,"message":"Something went wrong! Please try again"},null)
        // return res.status(500).json({"success":false,"message":"Something went wrong, Please try again"});
    }
}

let profilePost = (user,msg,file,callback) => {
    // console.log("Request from frontend--------------\n",msg)
    const schema = Joi.object().keys({
        firstName : Joi.string().required(),
        lastName : Joi.string().required(),
        city : Joi.string().allow(null,''),
        state : Joi.string().allow(null,''),
        zip : Joi.string().allow(null,''),
        phone_number :Joi.string().allow(null,''),
        profile_pic : Joi.string().allow(null,''),
    });

    try {
        let data = {}
        data["firstName"] = msg.firstName
        data["lastName"] = msg.lastName
        data["city"] = msg.city
        data["state"] = msg.state
        data["zip"] = msg.zip
        data["phone_number"] = msg.phone_number

        let profile_pic = null
        if (file){
            // console.log("----domain_base-----\n",domain_base)
            data['profile_pic'] = domain_base+""+file.path
        }
        else{
            data['profile_pic']= "https://visualpharm.com/assets/30/User-595b40b85ba036ed117da56f.svg"
        }

        Joi.validate(data, schema, (joi_err, value) => {
            if (joi_err) {
                console.log(joi_err)
                callback({"success":false,"message":"Invalid Input! Please try again."},null)
            }
            else{
                User.findOneAndUpdate(
                    { email: user.email },
                    data,
                    function(db_err, result) {
                    if (db_err){
                        console.log("Error",db_err);
                        callback({"success":false,"message":"Something went wrong! Please try again"},null)
                    }
                    else{
                        console.log("Profile updated successfully.\nUpdate query output - \n",result);
                        callback(null,{"success":true,"message":"Profile updated successfully"})
                    }
                });
            }
        });
    }
    catch(error){
        console.log("Error",error);
        callback({"success":false,"message":"Something went wrong! Please try again"},null)
        // return res.status(500).json({"success":false,"message":"Something went wrong, Please try again"});
    }
}


function handle_request(data,callback){

    msg = data.msg
    type = data.type
    user = data.user
    file = data.file

    switch (type) {
		case 'profileGet':
        profileGet(user,msg,callback);
            break;
        case 'profilePost' :
            profilePost(user,msg,file,callback);
            break;
	}

}

exports.handle_request = handle_request;
