var express = require('express');
var router = express.Router();
var kafka = require('../routes/kafka/client');


// Set up middleware
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', {session: false});


router.route('/getproducts').post( function (req, res) {

  console.log("In getproducts Route");
  console.log(req.body);

  kafka.make_request('product_topics',{"path":"productlistings", "body": req.body}, function(error,result){
    if (error) {
      console.log(error);
      console.log("Product not found");
      res.status(400).json({responseMessage: 'Product not found'});
    } else {
      console.log("Product Found");
      res.writeHead(200, {'content-type':'application/json'});
      res.end(JSON.stringify(result.result));
    }
  })
});

module.exports = router;