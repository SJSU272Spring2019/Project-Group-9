let call_kafka = require("../utils/kafka_common")

module.exports = {
    loginGet: (req, res) => {
        console.log('inside login')
        return res.status(200)
    },

    loginPost: (req, res) => {
        call_kafka(req, res,'auth',{payload: req.body,type:"loginPost",user:null})
    },

    registerPost : (req,res) => {
        call_kafka(req, res,'auth',{payload: req.body,type:"registerPost",user:null})
    },

    logout : (req,res) => {
        req.session.destroy();
        console.log("User logging out.")
        console.log("Cleared session")
        console.log("Session deleted.")
        return res.status(200)
    },
}
