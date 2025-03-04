function isPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }

  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

let number = parseInt(prompt('Enter a number: '));
let result = isPrime(number);
console.log(isPrime(number) ? 'number is prime' : 'number is not prime');

console.log(number + (isPrime(number) ? ' is prime' : ' is not prime'));
