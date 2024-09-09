// Tests for equality and inequality with strings
let string01 : string = "hello";
let string02 : string = "world";
console.log(string01 === string02);  //false
console.log(string01 !== string02);  //true

// Tests using the lower case function
let str1 : string = "hello";
let str2 : string = "World";
console.log(str1.toLowerCase() === str2.toLowerCase());  //false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 : number = 5;
let num2 : number = 10;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2);   //false
console.log(num1 < num2);   //true
console.log(num1 >= num2);  //false
console.log(num1 <= num2);  //true

// Tests using "and" and "or" operators
let x : number = 10;
let y : number = 5;
let z : number = 15;
console.log((x > y) && (x < z));  //true
console.log((x > y) || (x < z));  //true

// Test whether an item is in an array
let array : number[] = [1, 2, 3, 4, 5];
console.log(array.includes(3));  //true

// Test whether an item is in an array
console.log(!array.includes(6));  //true

