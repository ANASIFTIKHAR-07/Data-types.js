const score = 400;

// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
//  console.log(balance.toFixed(2)); // It is used more in the making of a E-Commerce website when we have to check the balance and the payment stuff for the client on the website

const otherNumber = 123.8667;
// console.log(otherNumber.toPrecision(3)); // It precise the value and it returns a string
// It also give the exponents in the return

const hundereds = 1000000;
// It is used to efficientally represents teh number specially larger numbers
// console.log(hundereds.toLocaleString());

// **********************************MATHS***************************************
console.log(Math); // Math is a object in the javacript
console.log(Math.abs(-4)); // (abs)=> absolute value, it converts the negative value into positive value
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 1, 9, 10, 0.5)); // Finds the lowest value in the array or the object
console.log(Math.max(4, 3, 6, 1, 9, 10, 0.5)); // Finds the maximum value in the array or the object

console.log(Math.floor(Math.random() * 10) + 1); // WE ADD THE +1 BECAUSE THERE IS A PROBABILITY THAT SOMETIMES THE VALUE CAN BE ZERO


const min = 10 ;
const max = 20 ;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
