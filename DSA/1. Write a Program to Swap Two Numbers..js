let a = parseInt(prompt('Enter first number (a):'));
let b = parseInt(prompt('Enter second number (b):'));

console.log(`Before swapping: a = ${a}, b = ${b}`);
console.log('Before Swap: a =', a, 'and b =', b);

a = a + b;
b = a - b;
a = a - b;

// let temp = a;
// a = b;
// b = a;

console.log(`After swapping: a = ${a}, b = ${b}`);
