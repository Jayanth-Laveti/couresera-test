(
  function()
  {
    angular.module("DIApp",[])
    .controller("DIController",DIController);
    function DIController($scope,$filter)
    {
    $scope.name = "Jayanth";
      $scope.uppe=function()
      {
        var upCase=$filter('lowercase');
        $scope.name=upCase($scope.name);
      };
    }
  
    
   

  }



)();



