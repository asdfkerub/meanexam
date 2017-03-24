app.controller('RegisterController',['$scope','$routeParams','UserFactory',function($scope,$routeParams,UserFactory){

  $scope.registeruser = function(user){
    UserFactory.newuser(user);
  }

}])
