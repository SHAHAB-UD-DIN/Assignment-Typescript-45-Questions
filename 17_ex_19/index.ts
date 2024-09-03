interface persons {name: string;}



function countDinnerGuests (persons: persons[]): void {
    let people = persons.length;
    console.log(`you are inviting ${people} people to dinner.`);
    
}

let persons: persons[] = [
    {name: "Hamdan"},
    {name: "Ali"},
    {name: "Ahmed"}
];

countDinnerGuests(persons)