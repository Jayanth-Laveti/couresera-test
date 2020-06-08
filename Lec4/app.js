(
  function (){

    angular.module("Interpolation",[])
    .controller("IController",IController);
    IController.$injector=['$scope','$filter'];
    function IController ($filter,$scope)
    {
      $scope.name='';
      
      $scope.msg=function($scope,$filter)
      {
       
        
        return "Hi user "+$scope.name;
      }
    }

  }
)();