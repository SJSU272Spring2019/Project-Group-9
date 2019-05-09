// 'use strict';
// const passport = require('passport');
// var JwtStrategy = require('passport-jwt').Strategy;
// var ExtractJwt = require('passport-jwt').ExtractJwt;
// var User = require('../models/userSchema');


// // Setup work and export for the JWT passport strategy
// var opts = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
//     secretOrKey: "cmpe273"
// };
// passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     console.log("JWT Payload:", jwt_payload);
//     User.findOne({email:jwt_payload.email}, function(err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             delete user.password;
//             return done(null, user);
//         } else {
//             return done(null, false);
//         }
//     });
// }));

// module.exports = passport;
    

// Verify JWT Token
const jwt = require('jsonwebtoken');

let verifyJWTToken = (req, res, next) => {
    const token = req.header('token');
    console.log("-----token-----\n",token);
    if (!token){
        console.log("--------------User not logged, Access Denied.-----------\n")
        return res.status(401).json({"message":"Access Denied"});
    }
    try {
        const user = jwt.verify(token,'jwtSecretKey');
        req.user = user;
        next();
    }
    catch(jwt_error){
        console.log("---------------Invalid Token, Access Denied.-----------------\n")
        res.status(400).send("Invalid token.")   
    }
}

module.exports = verifyJWTToken;