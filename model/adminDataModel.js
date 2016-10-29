var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var adminDataSchema = new Schema({
  firstName:   String,
  lastName:    String,
  username:    String,
  password:    String,
  signUpDate:  Date
});

module.exports = mongoose.model('adminDataModel', adminDataSchema);
