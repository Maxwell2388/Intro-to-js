

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++)
// {
//     text += cars[i] + "<br>";
// }
//document.getElementById("p1").innerHTML = text;




//FOR LOOP

//Example 2

// let text = "";
// for (let i = 0; i < 5; i++) {
//     text += "The number is  " + i + "<br>"
// }
// document.getElementById("p1").innerHTML = text;

//Example 3

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i, len, text;
// for ( i = 0, len = cars.length, text = ""; i < len; i++) {
//     text += cars[i] + "<br>";
// }

// document.getElementById("p1").innerHTML = text;


//Example 4

// var i = 5;
// for (var i = 0; i < 10; i++){

// }
 
// document.getElementById("p1").innerHTML = i;



//For / in LOOP

//Example 1

// const person = { f_name: "John", L_name: "Doe", age: "25"};

// let text = "";
// for (let x in person){
//     text += person [x] + " ";
// }

// document.getElementById("p1").innerHTML = text;


//Example 2 over numbers

// const numbers = [45, 4, 9, 16, 25];

// let text = "";
// for (let x in numbers){
//     text += numbers [x] + "<br>";
// }

// document.getElementById("p1").innerHTML = text;


// const numbers = [45, 4, 9, 16, 25];

// let text = "";
// numbers.forEach(myFunction);


// document.getElementById("p1").innerHTML = text;

// function myFunction(value, index, Array){
//     text += value + "<br>";
// }


////// For of Loop

// const cars = ["BMW", "Volvo", "Mini"];
// let text = "";
// for ( let x of cars) {
//     text += x + "<br>";
// }

// document.getElementById("p1").innerHTML = text;

 
// Looping For of Loop over a stringe

// let language = "Javascript";
// let text = "";
// for (let x of language) {
//     text += x + "<br>";
// }

// document.getElementById("p1").innerHTML = text;



// While loop

// let text = "";
// let i = 0;
// while (i < 10){
//      text += "<br> The number is "  + i;i++;
//  }

//  document.getElementById("p1").innerHTML = text;



//Do while Loop

// let text = ""
// let i = 0;
// do {
//      text += "<br> The number is "  + i;i++;
//  }

//  while (i < 10);

//  document.getElementById("p1").innerHTML = text;

//For (Example)

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";
// for (; cars[i];){
//     text += cars[i] + "<br>"; i++;
// }

// document.getElementById("p1").innerHTML = text;


// While (Example)

const cars = ["BMW", "volvo", "Saab", "Ford"];
let i = 0;
let text ="";

while (cars[i]){
    text += cars [i] + "<br>"; i++;
}

document.getElementById("p1").innerHTML = text;












