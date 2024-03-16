//             This is called string interpretation method and it is a modern way to concat the strings 
// It is a modern way to concat the string the result will be the same there will be no differnece in the result
// I can also add the string methods in the (${}) to manipulate the string 




let name = "Anas iftikhar";
let repoCount = 10;

console.log(`Hello my name is ${name} and this is my rep count ${repoCount}`); // Modern way to cancatinate the string


// Another way is :

let gameName = new String('Need for speed') 

console.log(gameName)

console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());

let newString = gameName.substring(0,4)  // substring do not obey the negative value
console.log(newString);

const anotherString = gameName.slice(-6,2)  // can give negative values and it is important to use


const newStringOne = "   Anas    ";

console.log(newStringOne)
console.log(newStringOne.trim())  // Can also trim from start or from the end of the string

const url =  "https://Anas.com/Anas%20iftikhar";
 console.log(url.replace('%20', '-'));

console.log(url.includes("Anas"));

const person = "Anas-rn-com";

console.log(person.split('-')); // Use to cut the string(long) in to pieces or you can say in array type
// We can also give the values to split 

// It will intrudive the key value pairs like from zero to the maximum number the string contains
// The string is a object not a array


// Mehods of string 
// Also known as prototype
// We can learn about te methods of the string in the browser console using a string 
// There are many methods for string available in the javascript


