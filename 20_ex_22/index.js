"use strict";
let array = [1, 2, 3, 4, 5];
let index = 10; // Intentionally setting an index that is out of bounds
try {
    let element = array[index]; // Accessing an element with an out-of-bounds index
    console.log("Element at index", index, ":", element);
}
catch (error) {
    console.error("Error:", error);
}
// Correcting the error by checking if the index is within bounds
if (index >= 0 && index < array.length) {
    let element = array[index];
    console.log("Element at index", index, ":", element);
}
else {
    console.log("Index out of bounds");
}
