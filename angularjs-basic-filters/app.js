angular.module('myapp', []);

angular.module('myapp')
    .component('app', {
        templateUrl: 'app.component.html',
        controller: function(){

            this.greeting = "hello";
            this.age=188;
        }
    });



    angular.module('myapp')
        .filter('myAge', function(){


            return function(value, ageLimit){


                 if(value < ageLimit)
                  return  "junior" ;


                  else
                  return "senior";
              
            };



        });


        