var myapp = angular.module('myapp', []);

myapp.controller('MyCtrl', function($scope){
    $scope.title = "AngularJS training";
    $scope.age = 10;
    
    $scope.sayHi = function(){
        alert('hi');
    };
});
