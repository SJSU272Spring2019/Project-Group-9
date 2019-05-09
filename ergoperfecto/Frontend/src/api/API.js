let API = {
  baseURL       : 'http://localhost:3001',
  routes: {
    login           : '/login'          ,
    logout          : '/logout'         ,
    register        : '/register'       ,
    profile         : '/profile'        ,
    questions       : '/questions'      ,
    answers         : '/answers'        ,
    sections        : '/sections'       ,
    exercises       : '/exercises'      ,
    deleteExercises : '/deleteExercises',
    healthcheck     : '/healthcheck'    ,
  }
}

export default API;
