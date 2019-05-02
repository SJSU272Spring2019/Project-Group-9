const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://user:user@cluster0-si4ql.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true , poolSize: 10 }, function(err) {
  if (err) throw err;
  else {
      console.log('Successfully connected to MongoDB');
  }
})