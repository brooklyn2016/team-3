var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var adminDataSchema = new Schema({
  firstName:   String,
  lastName:    String,
  username:    {
    type:      String,
    unique:    true,
    required:   true},
  password:    {
    type:      String,
    required:  true},
  signUpDate:  Date
});

adminDataSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

adminDataSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('adminDataModel', adminDataSchema);
