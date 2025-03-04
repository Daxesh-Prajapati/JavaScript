function removeWhiteSpace(str) {
  let result = str.split(' ').join('');
  return result;
}

let str = 'hello world in javascript!';
console.log(removeWhiteSpace(str));

// Using split(" ").join(""):
// Splits the string by spaces and joins it back without spaces.
// Does not remove tabs or newlines.
