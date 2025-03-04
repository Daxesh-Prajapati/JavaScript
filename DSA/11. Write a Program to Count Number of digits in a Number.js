function count_digits(n) {
  let digits = 0;
  while (n != 0) {
    n = Math.floor(n / 10);
    digits++;
  }
  return digits;
}

console.log(count_digits(12345));
