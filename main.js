// normal function method//

//  function myfunc(x1,x2,x3,x4){
//    return x1 + x2 + x3 + x4 
//  }
//  document.getElementById("p1").innerHTML = myfunc(2,4,6,8);

// //Function as an expression //

// const $func = function (x1,x2,x3,x4){return x1 + x2 + x3 + x4 };
// document.getElementById("p2").innerHTML = $func(2,4,6,8)

// //function constructor method //
// const $func1 = new Function ("x1","x2","x3","x4","return x1 + x2 + x3 + x4")
// document.getElementById("p3").innerHTML = $func1(2,4,6,8)

// // Arrow functions //

// const $func2 = (x1, x2, x3, x4) => x1 + x2 + x3 + x4 
// document.getElementById("p4").innerHTML = $func2 (2,4,6,8)


//Involking a function//
//This keyword//
let $obj = this
document.getElementById("p5").innerHTML = $obj

//within a function//
 function myfunc(){
   return this
 }

 document.getElementById("p6").innerHTML = myfunc()

 //within an object//
 const $people1 = {
   $name1 : "John Doe",
   $name2 : "Jane Doe",
   $total : function(){
     return this.$name1 + " & " +this.$name2
   }
  }

   document.getElementById("p8").innerHTML = $people1.$total()

   const $name1 = {
     $f_name : "Jane",
     $l_name : "Doe"
   }

   const $name2 = {
    $f_name : "Jonanthan",
    $l_name : "Doe"
  }

  const $name3 = {
    $f_name : "Mary",
    $l_name : "Doe"
  }

  document.getElementById("p10").innerHTML = $people1.$total.call($name1)



