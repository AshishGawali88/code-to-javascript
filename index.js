




/*
// part 10 random number generator

let x;
let y;
let z;

document.getElementById("myButton").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1 ;
    y = Math.floor(Math.random() * 6) + 1 ;
    z = Math.floor(Math.random() * 6) + 1 ;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}
*/


/*
// part 9 counter program

let counter = 0;

document.getElementById("increaseButton").onclick = function(){
    counter += 1;
    document.getElementById("myLabel").innerHTML = counter;
}

document.getElementById("resetButton").onclick = function(){
    counter = 0;
    document.getElementById("myLabel").innerHTML = counter;
}

document.getElementById("decreaseButton").onclick = function(){
    counter -= 1;
    document.getElementById("myLabel").innerHTML = counter;
}
*/

/*
// part 8 hypotenuse

let a = 3;
let b = 4;

let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("third side: " + c);

let a = 3;
let b = 4;
let c;
document.getElementById("myButton").onclick = function() {

    a = document.getElementById("myText1").value;
    b = document.getElementById("myText2").value;
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("myLabel3").innerHTML = "third side: " + c
    console.log("third side: " + c);
}
*/

/*
// part 7 Math

let x = 16;
let y = 5;
let z = 9;

let maximum; 
let minimum;
//x = Number(x);

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x, 2);

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);

console.log(maximum);
console.log(minimum);
*/

/*
//part 6 const

let pi = 3.14156;
let radius;
let cirumference;

radius = window.prompt("Enter the radius");
radius = Number(radius);

cirumference = 2 * pi * radius;

console.log("The cirumference of circle", cirumference);
*/

/*
//part 5 Type Conversion

let age = window.prompt("Enter age ");

console.log(typeof age );
age = Number(age);
age = age + 1;
console.log(typeof age );

console.log("you are", age, "year old ");

let x = 3.14;
let y = String(3.14);
let z = Boolean("pizza");

console.log( x , typeof x );
console.log( y , typeof y );
console.log( z , typeof z );

if(z){
    console.log(" Z is non-empty");
} else {
    console.log(" Z is empty");
}
*/


/*
// part 4 user input 

//let userName = window.prompt('Enter your name');
//console.log(userName);

let username;
document.getElementById("mySubmit").onclick = function (){

    username = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = username;
}
*/

/*
// part 3 agrumented assignement operator

let students = 21;

//students = students + 1;
//students = students - 1;
//students = students * 1;
//students = students / 2;
let extraStudents = students % 3;
console.log(extraStudents);
*/

/*

// part 2 variables
let firstName = "Ashish";  // string
let age = 21; //number
let student = false;    //boolean

age = age + 1;

console.log("Hello ", firstName);
console.log("You are", age , "year old");
console.log("Enrolled : ", student);


document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are "+ age + " year old";
document.getElementById("p3").innerHTML = "Enrolled : "+ student;
*/

/*
// part 1 console
console.log("I like pizza!");
console.log("It's really good");

window.alert("I really like pizza!");
*/