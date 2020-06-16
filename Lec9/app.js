(
    function (){
        'use strict';
    angular.module("ControllerAsSyntax",[])
    .controller("ControllerSyntax",ControllerSyntax);
    var items=["sf"];
    function ControllerSyntax()
    {
        var service=this;
        
        
        service.addItem=function ()
        {
            items.push(service.itemname);
        };
        service.removeItem=function (index)
        {
            items.splice(index,1);
        };
        service.listItems=items;
    }

}

)();