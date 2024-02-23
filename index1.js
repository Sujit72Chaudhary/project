
// Math.floor: Rounds down to the nearest integer
console.log("Math.floor(3.7):", Math.floor(3.7));
console.log("Math.floor(-3.7):", Math.floor(-3.7));

// Math.ceil: Rounds up to the nearest integer
console.log("Math.ceil(3.2):", Math.ceil(3.2));
console.log("Math.ceil(-3.2):", Math.ceil(-3.2));

// Math.abs: Returns the absolute value of a number
console.log("Math.abs(-42):", Math.abs(-42));

// Math.random: Returns a random floating-point number between 0 (inclusive) and 1 (exclusive)
console.log("Math.random():", Math.random());

// To get a random integer between a specific range, you can use Math.floor with Math.random

let randomInt = Math.floor(Math.random() * (10));
console.log("Random integer between 1 and 10:", randomInt);