function show_magicians(magician: string[]): void {
    magician.forEach((magician) => {
        console.log(magician);
        
    });
}

let magicianNames : string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
show_magicians(magicianNames);