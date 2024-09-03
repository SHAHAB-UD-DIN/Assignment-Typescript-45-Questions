// Define type of the Teacher
type Teacher = {
    id: number;
    name: string;
    subject: string; 
}

// create objects containing different teachers
let teacher01: Teacher = {
    id: 1001,
    name: "Usamn",
    subject: "Mathematics"
};

let teacher02: Teacher = {
    id: 1002,
    name: "Hamdan",
    subject: "English"
};

let teacher03: Teacher = {
    id: 1003,
    name: "Rehan",
    subject: "Science"
};

// Print out the objects
console.log("Teacher Details: \n", teacher01);
console.log("Teacher Details: \n", teacher02);
console.log("Teacher Details: \n", teacher03);