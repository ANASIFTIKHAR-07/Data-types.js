// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let createdDate = new Date(2024, 1 , 10);  The index of the month start from the 0 as usual javascript
// let createdDate = new Date(2024, 1 , 10 , 6 , 30);   We can also obtain the time in minutes and hours or even seconds 
//                                    Formats 
// let createdDate = new Date("2023-01-16"); YY/MM/DD
let createdDate = new Date("02-14-2024"); // MM/DD/YY
// The MM/DD/YY is often used more in the asia 
console.log(createdDate.toLocaleString());


//   Time stamps (IMPORTANT)

let myTimeStamp =  Date.now();
// console.log(myTimeStamp);  The result will be in the miliseconds as default (START FROM THE JAN 01 1970)
// console.log(createdDate.getTime());
console.log(Math.floor(Date.now()/1000));

//   Different methods to get the data in different values
let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getTime());
// console.log(newDate.getHours());

// `${newDate.getDate()} and the time is `  This is strign interpretation in the date

// Another method of using the localestring or you should say that it is the modification of the localestring method to get a more specific result 
// newDate.toLocaleString('default' , {
//     weekday: "long",
// })



