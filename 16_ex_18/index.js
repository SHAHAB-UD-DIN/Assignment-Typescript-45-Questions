"use strict";
// Define the array of places 
let places = ["Makkah", "Delhi", "Beijing", "Tokyo", "Seoul"];
// Print the array in its original order
console.log("Original order:", places);
// Print the array in alphabetical order
console.log("Alphabetical order:", [...places].sort());
// show that the array is still in its original order
console.log("Original order:", places);
// print the array in reverse alphabetical order
console.log("Reverse alphabetical order:", [...places].sort().reverse());
// show that the array is still in its original order
console.log("Original order:", places);
// Reverse the order of the list
places.reverse();
console.log("Reversed order:", places);
// Reverse the order of the list again to bring it back to its original order
places.reverse();
console.log("Original order:", places);
// Sort the array in alphabetical order
places.sort();
console.log("Sorted Alphabetically:", places);
// sort the array in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetically:", places);
