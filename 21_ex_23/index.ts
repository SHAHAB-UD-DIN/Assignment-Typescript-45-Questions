let car : string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car === 'honda');

console.log("Is car != 'toyota'? I predict True.");
console.log(car !== 'toyota');

console.log("Is car != 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car.includes('subaru')? I predict true.");
console.log(car.includes('subaru'));

console.log("Is car.includes('honda')? I predict false.");
console.log(car.includes('honda'));

console.log(car.length);
console.log("Is car.length > 5? I predict true.");
console.log(car.length > 5);

console.log("Is car.length < 5? I predict false.");
console.log(car.length < 5);

console.log(car.charAt(0));
console.log("Is car.charAt(0) === 's'? I predict true.");
console.log(car.charAt(0) === 's');

console.log("Is car.charAt(2) === 'b'? I predict True.");
console.log(car.charAt(2) === 'b');