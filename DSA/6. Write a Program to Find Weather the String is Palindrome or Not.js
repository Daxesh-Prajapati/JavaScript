function isPalindrome(str) {
  let original = str;
  let reverse = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i);
  }

  if (original === reverse) {
    return true;
  } else {
    return false;
  }
}

let str = prompt('Enter a string: ');
let result = isPalindrome(str);
if (isPalindrome(str)) {
  console.log(str, 'is a palindrome');
} else {
  console.log(str, 'is not palindrome');
}
