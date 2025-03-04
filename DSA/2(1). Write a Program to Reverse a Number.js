function reverse_number(n) {
  let a = n.toString().split('').reverse().join('');
  let result = parseInt(a);
  return result;
}

let result = reverse_number(12345);
console.log('Reversed number is : ', result);
