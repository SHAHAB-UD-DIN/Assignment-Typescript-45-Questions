"use strict";
// Tests for equality and inequality with strings
let string01 = "hello";
let string02 = "world";
console.log(string01 === string02); //false
console.log(string01 !== string02); //true
// Tests using the lower case function
let str1 = "hello";
let str2 = "World";
console.log(str1.toLowerCase() === str2.toLowerCase()); //false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
// Tests using "and" and "or" operators
let x = 10;
let y = 5;
let z = 15;
console.log((x > y) && (x < z)); //true
console.log((x > y) || (x < z)); //true
// Test whether an item is in an array
let array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); //true
// Test whether an item is in an array
console.log(!array.includes(6)); //true
