var kafka = require('../kafka/client');

let call_kafka = (req, res, topic,data) => {
    kafka.make_request(topic,data, function(err,result){
        console.log("result from kafka",err,result)
        if (err){
            console.log("Inside err",err);
            return res.json(err); 
        }else{
                console.log("result sending----\n",result)
                return res.json(result)
            }
        
    });    
}

module.exports = call_kafka;