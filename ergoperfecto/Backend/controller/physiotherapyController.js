let call_kafka = require("../utils/kafka_common")

module.exports = {

    addExercise: (req, res) => {
        console.log("idar aaya")
        call_kafka(req, res,'physio',{payload: req.body,type:"addExercise",user:null})
    },

    getExercises : (req,res) => {
        console.log("idar aaya")
        call_kafka(req, res,'physio',{payload: req.body,type:"getExercises",user:null})
    },
}