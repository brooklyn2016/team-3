var mongoose = require('mongoose'),
express = require('express'),
router = express.Router(),
student = require('./model/studentDataModel'),
trainer = require('./model/trainerDataModel'),
admin = require('./model/adminDataModel');


//GET all student data using GET
router.route('/student/data').get(function(req, res){
  student.find(function(err, data){
    if(err){
      res.send(err);
    }
    res.json(data);
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
