app.factory("QuestionFactory",['$location','$http',function($location,$http){

  var factory= {};

  factory.addq = function(question){
    $http({
      url: '/addq',
      method: 'POST',
      data:question
    }).then(function(res){
      $location.url('/dashboard');
    },function(res){
      console.log(res);
    })
  }
  factory.getQs = function(callback){
    $http({
      url:'/getqs',
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    })
  }
  factory.getQssingle = function(id,callback){
    $http({
      url: '/question/' + id,
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    },function(res){
      cosole.log(res);
    })
  }
  factory.getAssingle = function(id,callback){
    $http({
      url: '/answer/' + id,
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    },function(res){
      cosole.log(res);
    })
  }
  factory.addA = function(answer,id){
    $http({
      url: '/answer/' + id,
      method: 'POST',
      data:answer
    }).then(function(res){
      $location.url("/dashboard");
    },function(res){
      cosole.log(res);
    })
  }
  factory.addlike = function(id,q_is){
    $http({
      url: '/like/' + id,
      method: 'POST',
    }).then(function(res){
      $location.url('/question/'+q_is);
    },function(res){
      cosole.log(res);
    })
  }



  return factory;
}])
