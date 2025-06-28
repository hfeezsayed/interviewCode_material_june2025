<!DOCTYPE html>
<html>

<head>
  <title>JS Practise</title>
  {/* <link rel="stylesheet" href="index.css"> */}
</head>

<body>

  <script>
   //a
    var a = "Hafeez";
     console.log(a) // "Hafeez"
    var a = 4;

    //b
    let a = "Hafeez";
     console.log(a) // a has been already declared (syntax error)
    var a = 4;



     //1.
     (function(x){
       return function(y) {
         console.log(x)
       }(10)
     })(20) // Output will be 20


     //2.
     console.log(0.1 + 0.2);//0.30000000000000004
     console.log(0.1 + 0.2 == 0.3); //false

     //3.
     (function() {
        console.log(1);
        setTimeout(function(){
          console.log(2)
        }, 1000);
        setTimeout(function(){
         console.log(3)
       }, 0);
       console.log(4);
      })();//1,4,3,2


      //4.
      function sum(x, y) {
        if (y !== undefined) {
           return x + y;
        } else {
           return function(y) { return x + y; };
          }
      }
      console.log(sum(2,3)); // Outputs 5
      console.log(sum(2)(3)); // Outputs 5


      //5.
      

  </script>
</body>

</html>