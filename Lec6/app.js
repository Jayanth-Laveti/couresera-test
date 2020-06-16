(function () {
  'use strict';
  
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  .filter("custom",CustomFilter);
  
  MsgController.$inject = ['$scope','customFilter'];
  function MsgController($scope,customFilter) {
    $scope.name = "Yaakov";
    $scope.stateOfBeing = "hungry";
    $scope.num=100;
    $scope.input="Yaakov likes to eat healthy snacks at night!";
  
    $scope.sayMessage = function () {
      var msg= "Yaakov likes to eat healthy snacks at night!";
      return msg;
    };
    $scope.newMessage = function () {
      var msg= "Yaakov likes to eat healthy snacks at night!";
      return customFilter(msg);
    };
  
    $scope.feedYaakov = function () {
      $scope.stateOfBeing = "fed";
    };
    
  }
  function CustomFilter()
  {
    return function (input)
    {
      input=input.replace("a","A");
      return input;
    };
  }
  
  })();