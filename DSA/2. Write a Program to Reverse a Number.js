function reverse_number(n) {
  let reverse_store = 0;
  while (n != 0) {
    let ld = n % 10;
    reverse_store = reverse_store * 10 + ld;
    n = Math.floor(n / 10);
  }
  return reverse_store;
}

let result = reverse_number(123);
console.log('Reversed number is : ', result);
