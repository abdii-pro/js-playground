var person = "Abdullah";
var greeting = "Hello";
console.log(greeting, person + "!");

//Better version of var
let person1 = "Asad";
let greeting1 = "Hi";
const pi = 3.14; //constant variable
console.log(greeting1, person1 + "!");
console.log(`Value of pi is: ${pi}`); //template literal

//Block scope with let and const   
if(true){
    let blockVar = "I am inside block";
    console.log(blockVar);
} 
// console.log(blockVar); // Error: blockVar is not defined

//Typeof operator
console.log(typeof person); //string
console.log(typeof pi);
console.log(typeof true); //boolean
console.log(typeof("HI my name is abdullah")); //string
console.log(typeof 3.14);