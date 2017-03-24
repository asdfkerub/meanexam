app.controller('DashboardController',['$scope','$routeParams','UserFactory','QuestionFactory',function($scope,$routeParams,UserFactory,QuestionFactory){

  function currentuser(){
    UserFactory.getuser(function(data){
      $scope.user = data;
    })
  }
  currentuser();
  function getQs(){
    QuestionFactory.getQs(function(data){
      $scope.questions = data;
      // console.log($scope.questions);
    })
  }
  getQs();

}])
