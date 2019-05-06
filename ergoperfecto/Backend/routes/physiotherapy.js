// var express = require('express');
// var router= express.Router();

// var kafka = require('../kafka/client');
// router.route('/addexercise').post(function (req, res) {

//   console.log("In get assignments");
//   console.log("req.body:", req.body);
  
//   kafka.make_request('physio',{payload: req.body,type:"addexercise",user:null}, function(error,result){
//     if (error) {
//       console.log(error);
     
//       res.status(400).json({responseMessage: 'error'});
//     } else {
      
//         console.log(result.result);
//         res.writeHead(200, {'content-type':'application/json'});
//         res.end(JSON.stringify(result.result));
//     }
//   })
// });
// router.route('/getexercises').post(function (req, res) {

//     console.log("In get assignments");
//     console.log("req.body:", req.body);
    
//     kafka.make_request('physio',{payload: req.body,type:"getexercises",user:null}, function(error,result){
//       if (error) {
//         console.log(error);
       
//         res.status(400).json({responseMessage: 'error'});
//       } else {
        
//           console.log(result.result);
//           res.writeHead(200, {'content-type':'application/json'});
//           res.end(JSON.stringify(result.result));
//       }
//     })
//   });
//   module.exports = router;