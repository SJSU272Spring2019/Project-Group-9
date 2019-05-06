var connection =  require('./kafka/Connection');
let db_connection = require('./database.js');

const loginService = require("./services/login")
const profileService = require("./services/profile")
const evaluationService = require("./services/evaluation")
const  physio= require("./services/physio")
function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        var data = JSON.parse(message.value) 
        let file = null
        if ('file' in data.data){
            file = data.data.file
        }
        var request_data = {
            msg : data.data.payload, 
            type : data.data.type, 
            user : data.data.user,
            file : file,
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
handleTopicRequest("user",profileService)
handleTopicRequest("eval",evaluationService)
handleTopicRequest("physio",physio)

