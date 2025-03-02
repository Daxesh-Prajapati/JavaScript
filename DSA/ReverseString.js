function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage
let input = prompt('Enter a string:');
console.log('Reversed string:', reverseString(input));
