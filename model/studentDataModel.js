var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var studentDataSchema = new Schema({
  firstName:   String,
  lastName:    String,
  username:    String,
  password:    String,
  signUpDate:  Date,
  lastActive:  Date,
  trainerLink: Number,
  score:       Number,
  module:      Number,
  level:       Number
});

module.exports = mongoose.model('studentDataModel', studentDataSchema);
