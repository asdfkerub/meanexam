app.controller('AnswerController',['$scope','$routeParams','UserFactory','QuestionFactory',function($scope,$routeParams,UserFactory,QuestionFactory){

  function currentuser(){
    UserFactory.getuser(function(data){
      $scope.user = data;
    })
  }
  currentuser();
  function getAsingle(id){
    QuestionFactory.getAssingle(id,function(data){
      $scope.single_q = data;
      console.log($scope.single_q);
    })
  }
  getAsingle($routeParams.id);
  $scope.adda = function(answer){
    QuestionFactory.addA(answer,$routeParams.id);
  }

}])
