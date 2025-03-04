function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (char === str[i]) {
      count++;
    }
  }
  return count;
}

let str = 'hello my name is daxesh';
let char = 'a';
console.log(countCharacter(str, char));
