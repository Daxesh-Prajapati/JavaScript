function isEvenOdd(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let n = 16;

if (isEvenOdd(n)) {
  console.log('given number is even');
} else {
  console.log('given number is odd');
}
