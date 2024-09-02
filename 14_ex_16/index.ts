let myFriends : string[] = ["Imran", "Fazan", "Subhan"];
console.log(myFriends);
console.log("we have 3 more friends to invite the dinner\n");

// add 3 more friends
// add at the beginning
myFriends.unshift("Nadeem");
console.log(myFriends);

// add middle
myFriends.splice(2, 0, "Rizwan");
console.log(myFriends);

// add at the end
myFriends.push("Saad");
console.log(myFriends);

// Print all friends with the message
for (let i = 0; i < myFriends.length; i++) {
    console.log(`Mr.${myFriends[i]}, you are invited to my dinner.`);
}