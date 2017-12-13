angular.module('angularjs-cart')
    .component('app', {
        templateUrl: 'src/components/app/app.component.html',
        controller: function(){
            this.onMenuSelect = function(name){
                console.log(name);
            };

            this.onItemClick = function(name){
                alert(name);
            };
        }
    });