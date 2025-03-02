let a = parseInt(prompt('Enter first number (a):'));
let b = parseInt(prompt('Enter second number (b):'));

console.log(`Before swapping: a = ${a}, b = ${b}`);

a = a + b;
b = a - b;
a = a - b;

console.log(`After swapping: a = ${a}, b = ${b}`);
