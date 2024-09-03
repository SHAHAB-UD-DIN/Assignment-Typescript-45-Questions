"use strict";
function countDinnerGuests(persons) {
    let people = persons.length;
    console.log(`you are inviting ${people} people to dinner.`);
}
let persons = [
    { name: "Hamdan" },
    { name: "Ali" },
    { name: "Ahmed" }
];
countDinnerGuests(persons);
