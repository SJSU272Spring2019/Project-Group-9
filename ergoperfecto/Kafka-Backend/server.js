var connection =  require('./kafka/Connection');
let db_connection = require('./database.js');

var loginService = require("./services/login")

function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        var data = JSON.parse(message.value) 

        var request_data = {
            msg : data.data.payload, 
            type : data.data.type, 
            user : data.data.user,
        }
        fname.handle_request(request_data, function(err,res){
            console.log('after handle',err,res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res,
                        error : err
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log(data);
            });
            return;
        });
        
    });
}


handleTopicRequest("auth",loginService)
