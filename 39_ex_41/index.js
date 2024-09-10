"use strict";
function show_magicians(magician) {
    magician.forEach((magician) => {
        console.log(magician);
    });
}
let magicianNames = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
show_magicians(magicianNames);
