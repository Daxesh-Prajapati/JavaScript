function reverse_number(n) {
  let a = n.toString().split('').reverse().join('');
  //let result = parseInt(a)
  return a;
}

let result = reverse_number(123);
console.log('Reversed number is : ', result);

// also work for string
