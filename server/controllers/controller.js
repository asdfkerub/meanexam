var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
  login: function(req,res){
    User.findOne({name:req.body.name},function(err,data){
      if(err){
        res.sendStatus(400);
      }
        req.session.loggedin = data;
        res.json(data);
    })
  },
  register: function(req,res){
    var user = new User({name:req.body.name});
    user.save(function(err,data){
      if(err){
        res.status(400).send("Error creating a new user");
      }else{
        res.sendStatus(200);
      }
    })
  },
  logout: function(req,res){
    req.session.destroy();
    res.redirect("/");
  },
  dashboard: function(req,res){
    if(req.session.loggedin){
			res.json(req.session.loggedin);
		}else{
			res.status(401).send("No user in session.");
		}
    //
  },
  addq: function(req,res){
    var question = new Question({question:req.body.question,description:req.body.description});
    question.save(function(err,data){
      if(err){
        res.status(400).send("Error adding a new question");
      }else{
        res.sendStatus(200);
      }
    })
  },
  getqs: function(req,res){
    Question.find({}).deepPopulate('_answers _answers._user').exec(function(err, data){
      if(err){
        res.status(400).send("Error retrieving questions");
      }else{
        res.json(data);
      }
    })
  },
  getsingle: function(req,res){
    Question.findOne({_id:req.params.id}).deepPopulate('_answers _answers._user').exec(function(err, data){
      if(err){
        res.status(400).send("Error retrieving questions");
      }else{
        res.json(data);
      }
    })
  },
  getanswer: function(req,res){
    Question.findOne({_id:req.params.id}).deepPopulate('_answers _answers._user').exec(function(err, data){
      if(err){
        res.status(400).send("Error retrieving questions");
      }else{
        res.json(data);
      }
    })
  },
  subanswer: function(req,res){
    var answer = new Answer({answer:req.body.answer,details:req.body.details,likes:0,_user:req.session.loggedin._id})
    answer.save(function(err,data){
      if(err){
        res.status(400).send("error saving answer");
      }else{
        console.log(data);
        Question.update({_id:req.params.id},{$push:{_answers:data._id}},function(err,data){
          if(err){
            res.status(400).send("Error anaswer");
          }else{
            res.sendStatus(200);
          }
      })
    }
    // Question.findOne({_id:req.params.id},function(err,data){
    //   console.log(data);
    //   console.log(req.body);
    // })
  })
},
  addlike: function(req,res){
    var likes;
    Answer.findOne({_id:req.params.id},function(err,data){
      if(err){
        res.status(400).send("error liking");
      }else{
        likes = data.likes +  1;
        Answer.update({_id:req.params.id},{$set:{likes:likes}}).exec(function(err,data){
          if(err){
            res.status(400).send("error liking");
          }else{
            res.sendStatus(200);
          }
        })
      }
    })
  }




}
