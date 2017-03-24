app.controller('SingleQController',['$scope','$routeParams','UserFactory','QuestionFactory',function($scope,$routeParams,UserFactory,QuestionFactory){

    $scope.q_is = $routeParams.id;
  function currentuser(){
    UserFactory.getuser(function(data){
      $scope.user = data;
    })
  }
  currentuser();
  function getQsingle(id){
    QuestionFactory.getQssingle(id,function(data){
      $scope.single_q = data;
      // console.log($scope.single_q);
    })
  }
  getQsingle($routeParams.id);

  $scope.addlike = function(id){
    QuestionFactory.addlike(id,$scope.q_is);
    getQsingle($routeParams.id);
  }

}])
