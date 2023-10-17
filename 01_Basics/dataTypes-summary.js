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

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack and Heap Memory
// Stack (Primitive), Heap (Non - Primitive)

let myYoutubename = "hiteshchoudharydotcom";

let anotherName = myYoutubename;
anotherName = "chaiaurcode";


console.log(myYoutubename);
console.log(anotherName);


let userOne = {
    email: "rohan@gmail.com",
    upi: "rohan@ytb"
}

let userTwo = userOne;

userTwo.email = "sutar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);