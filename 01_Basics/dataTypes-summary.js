//Data Types:

// Primitive 
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 200.36; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 12345667984556465465n

// Reference (Non -Primitive)
// Array, Objects, Functions

const heros = ['Shaktiman', 'Krrish', 'Doga'];
let myObj = {
    fullname: "Rohan Sutar",
    age: 30,
}

const myFunction = function(){
    console.log(myFunction);
}


