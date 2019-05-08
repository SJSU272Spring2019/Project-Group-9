const uuidv4 = require('uuid/v4')
const multer = require('multer');
// let passport = require('passport');
const verifyJWTToken = require("../config/passport")

const storage  = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb){
        console.log("File obj",file)
        let arr = file.originalname.split(".")
        let temp_name = arr[0] + uuidv4() + "." +arr[1]
        cb(null,temp_name)
    }
})

// const s = {
//     session : false
// }

const imageFiter = (req,file,cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(new Error("File type not supported"),true);
    }
    else{
        cb(null,false);
    }
}

const upload = multer({
    storage:storage,
//    fileFilter:imageFiter,
})



const loginController = require('../controller/loginController');
const profileController = require("../controller/profileController");
const evaluationController = require("../controller/evaluationController");
const physioController = require("../controller/physiotherapyController")

module.exports = (router) => {
    /* login */
    router.post('/login', loginController.loginPost)
    router.get('/logout', loginController.logout)
    router.post('/register', loginController.registerPost)
    /* login */

    /* profile */
    router.get('/profile',verifyJWTToken, profileController.profileGet)
    router.post('/profile', verifyJWTToken, upload.single("profile_pic"),profileController.profilePost)
    /* profile */

    /* evaluation */
    router.get('/questions', verifyJWTToken,evaluationController.questionsGet)
    router.post('/answers', verifyJWTToken,evaluationController.saveAnswers)
    router.get('/sections',verifyJWTToken,evaluationController.getEvaluationForRecommendation)
    /* evaluation */

    /* physio */
    router.get('/exercises',physioController.getExercises)
    router.post('/exercises',physioController.addExercise)
    router.post('/deleteExercises',physioController.deleteExercise)
    /* physio */

    /* healthcheck */
    router.get('/healthcheck',loginController.healthcheck)
    /* healthcheck */

    return router;
}