let call_kafka = require("../utils/kafka_common")

module.exports = {

    questionsGet : (req,res) => {
        call_kafka(req, res, 'eval',{payload: req.body,type:"questionsGet",user:req.user})
    },

    saveAnswers : (req,res) => {
        call_kafka(req, res, 'eval',{payload: req.body,type:"saveAnswers",user:req.user})
    },

    getEvaluationForRecommendation : (req,res) => {
        call_kafka(req, res, 'eval',{payload: req.body,type:"getEvaluationForRecommendation",user:req.user})
    },
}
