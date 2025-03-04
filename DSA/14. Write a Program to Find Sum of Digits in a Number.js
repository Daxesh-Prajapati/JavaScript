function SumOfDigitis(n) {
  let sum = 0;
  while (n != 0) {
    let ld = n % 10;
    sum = sum + ld;
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(SumOfDigitis(1233));
