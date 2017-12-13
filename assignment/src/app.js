angular.module('myapp', []);

angular.module('myapp')
    .component('app', {
        templateUrl: 'app.component.html',
        controller: function(){
            this.firstBtnTitle = "First buttton";
            this.secondBtnTitle = "Second buttton";
            this.showAlert = function(){
                alert('alerted');
            };

            this.showConsole = function(){
                console.log('in console');
            };
        }
    });

angular.module('myapp')
    .component('myButton', {
        bindings: {
            myTitle: '@',
            onBtnClick: '&'

        },
        templateUrl: 'mybutton.component.html',
        controller: function(){

            this.onClick = function(){

                console.log('inside component');
                this.onBtnClick();
            }


        }


 });


 angular.module('myApp')