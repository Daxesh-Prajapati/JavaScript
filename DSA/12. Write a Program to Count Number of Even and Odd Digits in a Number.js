function count_even_odd_digits_in_number(n) {
  let even = 0;
  let odd = 0;
  while (n != 0) {
    let ld = n % 10;
    if (ld % 2 === 0) {
      even++;
    } else {
      odd++;
    }
    n = Math.floor(n / 10);
  }
  return { even, odd };
}

let result = count_even_odd_digits_in_number(88899);
console.log(
  'Even digits in a number: ',
  result.even,
  '\nOdd digits in a number: ',
  result.odd,
);
