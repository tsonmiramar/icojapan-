var mongoose = require("mongoose");
var config = require("../config");

mongoose.Promise = global.Promise;

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };   

mongoose.connect(config.dbURI,options);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log("Connected to mongoLab database");
  console.log(config.dbURI);
});

var studentSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String,
    age: Number,
    school: String,
    occupation: String
});

var StudentModel = mongoose.model('Student', studentSchema);

module.exports = {
    mongoose,
    StudentModel
}
