"use strict";
let guests = ["Imran", "Fazan", "Subhan", "Rizwan", "Saad"];
console.log("Sorry, the dinner table won't arrive in time, so I can only invite two people for dinner.");
while (guests.length > 2) {
    let removeGuest = guests.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
}
for (let guest of guests) {
    console.log(`Hey, ${guest}, you are still invited to dinner.`);
}
guests.splice(0, guests.length);
console.log("Guest list:", guests);
