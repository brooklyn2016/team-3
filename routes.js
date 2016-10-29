var mongoose = require('mongoose'),
express = require('express'),
router = express.Router(),
passport = require('passport'),
jwt = require('jwt-simple'),
student = require('./model/studentDataModel'),
trainer = require('./model/trainerDataModel'),
admin = require('./model/adminDataModel');

var config = 'victorCruzRox';
//require('passport')(passport);

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
/*
router.route('/student/data/authenticate').post(function(req, res){
  student.findOne({
    username: req.body.username}, function(err, user){
      if(err) throw err;
      if(!user){
        res.send({success: false, msg: 'authentification failed. user not found'});
      } else{
        user.comparePassword(req.body.password, function(err, isMatch){
          if(isMatch && !err){
            var token  = jwt.encode(user, config.secret);
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.send({success: false, msg: 'authentication failed. wrong password'});
          }
        });
      }
  });
});
*/
router.route('/student/data/:id')
  //find data of single student by id using GET
  .get(function(req, res){
    student.findById(req.params.id, function(err, data){
      if(err){
        res.send(err);
      }
      res.send(data);
    });
  })
  //update student data with id using PUT
  .put(function(req, res){
    student.findById(req.params.id, function(err, data){
      if(err){
        res.send(err);
      }
      //update necessary parts of the data
      data.firstName   = req.body.firstName;
      data.lastName    = req.body.lastName;
      data.username    = req.body.username;
      data.password    = req.body.password;
      data.signUpDate  = req.body.signUpDate;
      data.lastActive  = req.body.lastActive;
      data.trainerLink = req.body.trainerLink;
      data.score       = req.body.score;
      data.module      = req.body.module;
      data.level       = req.body.moduel;
      data.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({message: "data updated successfully"});
      });
    });
  })
  //delete student data by id using DELETE
  .delete(function(req, res){
    student.remove({
      _id: req.params.id}, function(err, data){
        if(err){
          res.send(err);
        }
        res.json({message: "data deleted"});
    });
  });

/*************************************************************************************************************************/
//API for trainer database, basically the same funtions as the student database
//GET all trainer data using GET
router.route('/trainer/data').get(function(req, res){
  trainer.find(function(err, data){
    if(err){
      res.send(err);
    }
    res.json(data);
  });
});

//create a new student data using POST
router.route('/trainer/data').post(function(req, res){
  trainer.create({
    //set values from trainerDataModel
    firstName:   req.body.firstName,
    lastName:    req.body.lastName,
    username:    req.body.username,
    password:    req.body.password,
    signUpDate:  req.body.signUpDate,
    lastActive:  req.body.lastActive,
    numStudents: req.body.numStudents,
    studentLink:        req.body.studentLink
  }, function(err, data){
    res.send(err);
  });
});

router.route('/trainer/data/:id')
  //find data of single trainer by id using GET
  .get(function(req, res){
    trainer.findById(req.params.id, function(err, data){
      if(err){
        res.send(err);
      }
      res.send(data);
    });
  })
  //update student data with id using PUT
  .put(function(req, res){
    trainer.findById(req.params.id, function(err, data){
      if(err){
        res.send(err);
      }
      //update necessary parts of the data
      data.firstName   = req.body.firstName;
      data.lastName    = req.body.lastName;
      data.username    = req.body.username;
      data.password    = req.body.password;
      data.signUpDate  = req.body.signUpDate;
      data.lastActive  = req.body.lastActive;
      data.numStudents = req.body.numStudents;
      data.studentLink = req.body.studentLink;
      data.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({message: "data updated successfully"});
      });
    });
  })
  //delete student data by id using DELETE
  .delete(function(req, res){
    trainer.remove({
      _id: req.params.id}, function(err, data){
        if(err){
          res.send(err);
        }
        res.json({message: "data deleted"});
    });
  });

/*************************************************************************************************************************/
//GET all admin data using GET
router.route('/admin/data').get(function(req, res){
  admin.find(function(err, data){
    if(err){
      res.send(err);
    }
    res.json(data);
  });
});

//create a new student data using POST
router.route('/admin/data').post(function(req, res){
  admin.create({
    //set values from trainerDataModel
    firstName:   req.body.firstName,
    lastName:    req.body.lastName,
    username:    req.body.username,
    password:    req.body.password,
    signUpDate:  req.body.signUpDate,
  }, function(err, data){
    res.send(err);
  });
});

router.route('/admin/data/:id')
  //find data of single trainer by id using GET
  .get(function(req, res){
    admin.findById(req.params.id, function(err, data){
      if(err){
        res.send(err);
      }
      res.send(data);
    });
  })
  //update student data with id using PUT
  .put(function(req, res){
    admin.findById(req.params.id, function(err, data){
      if(err){
        res.send(err);
      }
      //update necessary parts of the data
      data.firstName   = req.body.firstName;
      data.lastName    = req.body.lastName;
      data.username    = req.body.username;
      data.password    = req.body.password;
      data.signUpDate  = req.body.signUpDate;
      data.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({message: "data updated successfully"});
      });
    });
  })
  //delete student data by id using DELETE
  .delete(function(req, res){
    admin.remove({
      _id: req.params.id}, function(err, data){
        if(err){
          res.send(err);
        }
        res.json({message: "data deleted"});
    });
  });

router.get('*', function(req, res){
  res.sendfile('./webApp/index.html');
});

module.exports = router;
