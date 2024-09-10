"use strict";
let current_users = ["shahab", "adnan", "usman", "ali", "waleed"];
let new_users = ["abdullah", "shahab", "hamdan", "WALEED", "akbar"];
for (let new_user of new_users) {
    let usernameTaken = false;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
}
