var mongoose = require("mongoose");
var config = require("../config");

mongoose.Promise = global.Promise;
mongoose.connect(config.dbURI);
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
