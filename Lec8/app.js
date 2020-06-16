(
    
    function ()
    {
        'use strict';
        var shopList1=["Paper","Pen","Book"];
        var shopList2=[
            {
                name:"Jayanth",
                age:20
            }];
        angular.module("NgRepeat",[])
        .controller("NgRepeatController",NgRepeatcontroller);
        NgRepeatcontroller.$inject=['$scope'];
        function NgRepeatcontroller($scope)
        {
            $scope.shopList1=shopList1;
            $scope.shopList2=shopList2;
            var lis0=shopList1[0];
            $scope.lis0=lis0;
            $scope.removeItem=function(indexItem)
            {
                shopList1.splice(indexItem,1);
                
                console.log(shopList1);
                return shopList1;
            };
            $scope.addItem=function()
            {
                $scope.shopList1.push($scope.newItem);
            };
           
        }
    }
)();
