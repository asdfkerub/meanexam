app.controller('NewQController',['$scope','$routeParams','UserFactory','QuestionFactory',function($scope,$routeParams,UserFactory,QuestionFactory){

  function currentuser(){
    UserFactory.getuser(function(data){
      $scope.user = data;
      console.log($scope.user);
    })
  }
  currentuser();
  $scope.addq = function(question){
    QuestionFactory.addq(question);
  }

}])
