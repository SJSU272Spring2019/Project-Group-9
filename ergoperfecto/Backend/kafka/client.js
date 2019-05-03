var rpc = new (require('./kafkarpc'))();

//make request to kafka
function make_request(queue_name, msg_payload, callback){
    // console.log('in make request');
    console.log(msg_payload);
	rpc.makeRequest(queue_name, msg_payload, function(err, response){
		// console.log("----------------\n",err, response)
		callback(err, response);
	});
}

exports.make_request = make_request;