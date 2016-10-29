var mongoose = require('mongoose'),
express = require('express'),
router = express.Router(),
student = require('./model/studentDataModel'),
trainer = require('./model/trainerDataModel'),
admin = require('./model/adminDataModel');

/*************************************************************************************************************************/
//API for student database
//GET all student data using GET
router.route('/student/data').get(function(req, res){
  student.find(function(err, data){
    if(err){
      res.send(err);
    }
    res.json(data);
  });
});

//create a new student data using POST
router.route('/student/data').post(function(req, res){
  student.create({
    //set values from studentDataModel
    firstName:   req.body.firstName,
    lastName:    req.body.lastName,
    username:    req.body.username,
    password:    req.body.password,
    signUpDate:  req.body.signUpDate,
    lastActive:  req.body.lastActive,
    trainerLink: req.body.trainerLink,
    score:       req.body.score,
    module:      req.body.module,
    level:       req.body.moduel
  }, function(err, data){
    res.send(err);
  });
});



//GET all trainer data using GET
router.route('/trainer/data').get(function(req, res){
  trainer.find(function(err, data){
    if(err){
      res.send(err);
    }
    res.json(data);
  });
});

//GET all admin data using GET
router.route('/admin/data').get(function(req, res){
  admin.find(function(err, data){
    if(err){
      res.send(err);
    }
    res.json(data);
  });
});


module.exports = router;
