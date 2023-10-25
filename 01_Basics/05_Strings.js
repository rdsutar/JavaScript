const name = "Rohan";
const repoCount = 50;

//console.log(name + repoCount + " Value");

console.log(`My name is ${name} and my repo rate is ${repoCount}`);

const gameName = new String('Rohansutar');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "     Rohan     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rohan%20sutar.co.in"
console.log(url.replace('%20', '.'));