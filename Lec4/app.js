// (
//   function (){

//     angular.module("Interpolation",[])
//     .controller("IController",IController);
//     IController.$injector=['$scope','$filter'];
//     function IController ($filter,$scope)
//     {
//       $scope.name='';
      
//       $scope.msg=function()
//       {
//         var upname=$filter('uppercase')($scope.name);
       
        
//         return upname;
//       }
//     }

//   }
// )();

(function ()
{
  'use strict'
  angular.module("FilterDemo",[])
  .controller("FController",FController);
  FController.injector=['$scope','$filter'];
  function FController ($scope,$filter){
    $scope.name="";
    
    $scope.blurname=function()
    {
      
      var revname=$filter('uppercase')($scope.name);
      $scope.name=revname;  
      console.log(revname);
      return revname;
    }
  }
})();



