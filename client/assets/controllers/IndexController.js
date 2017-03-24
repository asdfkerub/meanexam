app.controller('IndexController',['$scope','$routeParams','UserFactory',function($scope,$routeParams,UserFactory){

  $scope.logIn = function(user){
    UserFactory.logIn(user);
  }

}])
