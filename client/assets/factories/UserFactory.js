app.factory("UserFactory",['$location','$http',function($location,$http){

  var factory= {};

  factory.logIn = function(user){
    $http({
      url: "/login",
      method: "POST",
      data: user
    }).then(function(res){
      if(res.data == null){
        $location.url("/")
      }else{
        $location.url("/dashboard")
        console.log("success",res);
      }
    },function(res){
      console.log("factory",res);
    })
  }
  factory.newuser = function(user){
    $http({
      url: "/register",
      method: "POST",
      data: user
    }).then(function(res){
      $location.url("/");
    },function(res){
      console.log("factory",res);
    })
  }
  factory.getuser = function(callback){
    $http({
      url:'/dashboard',
      method: "GET",
    }).then(function(res){
      callback(res.data);
    },function(res){
      $location.url("/");
    })
  }

  return factory;
}])
