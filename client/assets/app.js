var app = angular.module("app",['ngRoute','ngMessages']);
app.config(function($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl : "partials/index.html",
      controller : "IndexController"
    })
    .when("/register",{
      templateUrl: "partials/register.html",
      controller: "RegisterController"
    })
    .when("/dashboard",{
      templateUrl: "partials/dashboard.html",
      controller: "DashboardController"
    })
    .when("/new_question",{
      templateUrl: "partials/new.html",
      controller: "NewQController"
    })
    .when("/question/:id",{
      templateUrl: "partials/single_q.html",
      controller: "SingleQController"
    })
    .when("/answer/:id",{
      templateUrl: "partials/answer.html",
      controller: "AnswerController"
    })

})
