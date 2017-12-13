var myapp = angular.module('myapp',[]);

myapp.component('myCalculator',{


    templateUrl: 'one.html',
    controller : 'MyCtrl',

    bindings:{

        resultText: '@'
    }
});



       
myapp.controller('MyCtrl',function(){

    this.title = "AngularJs";

    this.fun = function() {

        alert('hi');
        return 2;
     };

     this.students = [

     {

        name: 'AK',
        department: 'COMPUTERS',
        dob: '19-01-1223'


     },
     {
        
                name: 'AKash',
                department: 'science',
                dob: '9-01-1223'
        
        
             },
        
             {
                
                        name: 'vij',
                        department: 'finance',
                        dob: '1-01-1223'
                
                
                     }
                


     ]


     this.onStudentSelect = function(student){

         $scope.selectedStudent = student;
         console.log(student);
     };


   /*$scope.imgList = [

      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqcpjpEqtY2iy9mWTaqF6bvqeWigxJ69B8Oehm6SdNj1ng9v0',
      'https://fortunedotcom.files.wordpress.com/2017/09/gettyimages-51731256.jpg?w=705'
]

     $scope.activeImageIndex =0;

   
     $scope.goNext = function(){


        if( $scope.activeImageIndex === $scope.imgList.length-1){
     
          $scope.activeImageIndex=0;

        }
        else{

        $scope.activeImageIndex++;

        }
     };


     $scope.goBack = function(){
        
        if( $scope.activeImageIndex === 0){
            
           $scope.activeImageIndex= $scope.imgList.length-1;
       
       }
        
       else{
                $scope.activeImageIndex--;
       }
             };*/


             this.onInputChange = function(){
             this.isCalculated = false;
             }



             this.input1 = 0;
             this.input2= 0;
             this.result = 0;

             this.add = function(){

 
                this.result = parseInt(this.input1) + parseInt(this.input2);
                console.log(this.result);
                this.isCalculated = true;
                
             }

             this.sub = function(){
                this.result = parseInt(this.input1) - parseInt(this.input2);
                  console.log($scope.result);
                  this.isCalculated = true;
                                 }


                                 this.mul = function(){
                                    this.result = parseInt(this.input1) * parseInt(this.input2);
                console.log(this.result);
                this.isCalculated = true;
        }

        this.div = function(){
            this.result = parseInt(this.input1)/parseInt(this.input2);
          console.log(this.result);
          this.isCalculated = true;
      }


     
      







});