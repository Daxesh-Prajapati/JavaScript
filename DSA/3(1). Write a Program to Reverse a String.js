function reverse_string(str) {
  let a = str.toString().split('').reverse().join('');
  return a;
}

let result = reverse_string('daxesh');
console.log('Reversed string is :', result);
