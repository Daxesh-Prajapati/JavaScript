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

let a = parseInt(prompt('Enter starting number of series: '));
let b = parseInt(prompt('Enter ending number of series: '));

for (let i = a; i <= b; i++) {
  if (isPrime(i)) {
    console.log(i, 'is prime number');
  }
}
