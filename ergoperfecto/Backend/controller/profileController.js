let call_kafka = require("../utils/kafka_common")

module.exports = {

    profileGet : (req,res) => {
        call_kafka(req, res, 'user',{payload: req.body,type:"profileGet",user:req.user})
    },

    profilePost : (req,res) => {
        call_kafka(req, res, 'user',{payload: req.body,type:"profilePost",user:req.user,file:req.file})
    },

}
