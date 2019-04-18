var async = require('async');

var Product = require('../models/ProductSchema');


exports.productService = function productService(msg, callback){
    console.log("In Property Service path:", msg.path);
    switch(msg.path){
        case "productlistings":
        productlistings(msg,callback);
            break;
    
    }
};



function productlistings(msg, callback){

    console.log("In listing property topic service. Msg: ", msg)
  
    Product.find( {}, function(err,result){
        if (err) {
            console.log(err);
            console.log("unable to read the database");
            callback(err, "unable to read the database");
        } else 
                   { 
                       callback(null, {status: 200, result});}
                
    })
}