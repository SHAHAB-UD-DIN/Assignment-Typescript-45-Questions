"use strict";
let age = 30;
if (age < 2) {
    console.log("Print a message that the person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("Print a message that the person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("Print a message that the person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("Print a message that the person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("Print a message that the person is an adult");
}
else {
    console.log("Print a message that the person is an elder");
}
