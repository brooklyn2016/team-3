var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var trainerDataSchema = new Schema({
  firstName:   String,
  lastName:    String,
  username:    String,
  password:    String,
  signUpDate:  Date,
  lastActive:  Date,
  numStudents: Number,
  studentLink: Number
});

module.exports = mongoose.model('trainerDataModel', trainerDataSchema);
